# MARS - Multi-Agent Research Studio
<img src="https://github.com/quantumiracle/MARS/blob/master/img/mars_label.jpg" alt="drawing" width="1000"/>


*If life exists on Mars, shall we human cooperate or compete with it?* 

## Status
WIP. Not released yet.

If you have any question (propose an ISSUE if it's general problem) or want to contribute to this repository, feel free to contact me: *zhding96@gmail.com*

Large-scale competitive games are generally hard, I'm still struggling with developing this repo.

## Usage Instruction
Some tutorials (`./tutorials/`) are provided for simple MARL concepts, including building an arbitrary matrix game, solving the Nash equilibrium with different algorithms for matrix games, building arbitrary Markov game, solving Markov games, etc. 

For comprehensive usage instruction document, see [here](http://htmlpreview.github.io/?https://github.com/quantumiracle/MARS/blob/master/docs/build/html/index.html). 

MARS is still under-development and not prepared to release yet. You may find it hard to clone b.c. the author is testing algorithms with some models hosted on Git.


## Installation
Use Python 3.6
```
pip install -r requirements.txt
```


## Development
Basic RL Algorithms to do:
- [x] DQN
- [x] PPO
- [x] Genetic Algorithm
- [ ] PMOE
- [ ] DDPG
- [ ] TD3
- [ ] SAC

MARL Algorithms to do:
- [x] Self-Play
- [x] [Fictitious Self-Play](http://proceedings.mlr.press/v37/heinrich15.pdf)
- [x] [Neural Fictitious Self-Play](https://arxiv.org/abs/1603.01121)
- [x] Policy Space Responce Oracle
- [ ] [Joint Policy Space Responce Oracle](http://proceedings.mlr.press/v139/marris21a.html)
- [ ] [MADDPG](https://arxiv.org/abs/1706.02275)
- [ ] QMIX
- [ ] QTRAN
- [ ] MAPPO
<!-- - [x] Nash-DQN
- [x] Nash-DQN-Exploiter
 -->
Supported environments:
- [x] Openai Gym
- [x] PettingZoo
- [x] LaserTag
- [x] SlimeVolley
- [ ] SMAC

## Self-play
<img src="https://github.com/quantumiracle/MARS/blob/master/img/slimevolley-selfplay.gif" height=400 width=1000 >

Two agents in *SlimeVolley-v0* trained with self-play. 

<img src="https://github.com/quantumiracle/MARS/blob/master/img/boxing-selfplay.gif" height=500 width=400 >

Two agents in *Boxing-v1 PettingZoo* trained with self-play. 

[Exploitability](exploit.md) tests are also conducted.
