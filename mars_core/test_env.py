from env.import_env import make_env

Args = {'num_envs': 1, 'ram': True, 'against_baseline': False}


class AttrDict(dict):
    def __init__(self, *args, **kwargs):
        super(AttrDict, self).__init__(*args, **kwargs)
        self.__dict__ = self


args = AttrDict(Args)

envs = {
    'slimevolley': [
        'SlimeVolley-v0', 'SlimeVolleySurvivalNoFrameskip-v0',
        'SlimeVolleyNoFrameskip-v0', 'SlimeVolleyPixel-v0'
    ],
    'pettingzoo': [
        'basketball_pong_v1', 'boxing_v1', 'combat_plane_v1', 'combat_tank_v1',
        'double_dunk_v2', 'entombed_competitive_v2', 'entombed_cooperative_v2',
        'flag_capture_v1', 'foozpong_v1', 'ice_hockey_v1', 'joust_v2',
        'mario_bros_v2', 'maze_craze_v2', 'othello_v2', 'pong_v1',
        'quadrapong_v2', 'space_invaders_v1', 'space_war_v1', 'surround_v1',
        'tennis_v2', 'video_checkers_v3', 'volleyball_pong_v1', 'warlords_v2',
        'wizard_of_wor_v2', 'dou_dizhu_v3', 'go_v3', 'leduc_holdem_v3',
        'rps_v1', 'texas_holdem_no_limit_v3', 'texas_holdem_v3',
        'tictactoe_v3', 'uno_v3'
    ],
    'lasertag':
    ['LaserTag-small2-v0', 'LaserTag-small3-v0', 'LaserTag-small4-v0'],
    'gym':
    ['Pong-ram-v0', 'LunarLander-v2', 'CartPole-v1', 'HalfCheetah-v2']
}

cnt, fail_cnt = 0, 0
for env_type, envs in envs.items():
    for env_name in envs:
        cnt += 1
        try:
            test_env = make_env(env_name, env_type, args)
        except:
            fail_cnt += 1
            print(f'Failed to load env {env_name} in type {env_type}.')
        print(f"{cnt-fail_cnt}/{cnt} succeed.")