import argparse
import copy
import cloudpickle 
import torch
torch.multiprocessing.set_start_method('forkserver', force=True)
from multiprocessing import Process
from multiprocessing.managers import BaseManager

from mars.utils.common import EvaluationModelMethods
from mars.env.import_env import make_env
from mars.rl.agents import *
from mars.utils.func import get_general_args
from mars.rl.common.storage import ReplayBuffer
from mars.utils.logger import init_logger

from rolloutExperience import rolloutExperience
from updateModel import updateModel


parser = argparse.ArgumentParser(description='Arguments of the general launching script for MARS.')

### Load configurations
game_type = 'pettingzoo'
game = ['boxing_v1', 'surround_v1', 'combat_plane_v1', \
        'combat_tank_v1', 'pong_v2', 'tennis_v2', \
        'ice_hockey_v1', 'double_dunk_v2'][0]

method = ['selfplay', 'selfplay2', 'fictitious_selfplay', \
            'fictitious_selfplay2', 'nash_dqn', 'nash_dqn_exploiter', \
            'nash_ppo'][-3]

# method = 'nash_dqn_speed'

if __name__ == '__main__':

    ori_args = get_general_args(game_type+'_'+game, method)
    print(ori_args)
    ori_args.device = 'cpu'
    ori_args.num_envs = 1

    ### Create env
    env = make_env(ori_args)
    print(env)

    ### Specify models for each agent
    BaseManager.register('replay_buffer', ReplayBuffer)
    manager = BaseManager()
    manager.start()
    args = copy.copy(ori_args)
    args.replay_buffer = manager.replay_buffer(int(float(ori_args.algorithm_spec['replay_buffer_size'])))  
    print(ori_args)
    model1 = eval(args.algorithm)(env, args)
    model2 = eval(args.algorithm)(env, args)

    if method in EvaluationModelMethods:
        eval_env = make_env(args)
        eval_model1 = eval(args.algorithm)(env, args)
        eval_model2 = eval(args.algorithm)(env, args)

        model = MultiAgent(env, [model1, model2], args, eval_models = [eval_model1, eval_model2], eval_env = eval_env)   

    else:
        model = MultiAgent(env, [model1, model2], args)

    ### Rollout
    # logger = init_logger(env, '0', ori_args)  # this cannot use the args with replay buffer
    # args.logger = logger

    model = cloudpickle.dumps(model)
    env = cloudpickle.dumps(env)
    args = cloudpickle.dumps(args)
    processes = []
    play_process = Process(target=rolloutExperience, args = (env, model, args))
    play_process.daemon = True  # sub processes killed when main process finish
    processes.append(play_process)

    update_process = Process(target=updateModel, args= (env, model, args))
    update_process.daemon = True
    processes.append(update_process)

    [p.start() for p in processes]
    while play_process.is_alive() and update_process.is_alive():
        pass
