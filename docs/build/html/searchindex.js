Search.setIndex({docnames:["experiments/exploit","experiments/single_agent","index","installation/install","introduction/intro","mars/algorithm/agent","mars/algorithm/dqn","mars/algorithm/ppo","mars/env/env","mars/utils/data_struct","mars/utils/func","mars/utils/logger","user_guide/general","user_guide/marl","user_guide/notes","user_guide/quick_start","user_guide/sarl"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["experiments/exploit.md","experiments/single_agent.md","index.rst","installation/install.rst","introduction/intro.md","mars/algorithm/agent.rst","mars/algorithm/dqn.rst","mars/algorithm/ppo.rst","mars/env/env.rst","mars/utils/data_struct.rst","mars/utils/func.rst","mars/utils/logger.rst","user_guide/general.md","user_guide/marl.md","user_guide/notes.md","user_guide/quick_start.md","user_guide/sarl.md"],objects:{"mars_core.env.import_env":{_create_single_env:[8,0,1,""],make_env:[8,0,1,""]},"mars_core.env.wrappers":{gym_wrappers:[8,1,0,"-"],mars_wrappers:[8,1,0,"-"],vecenv_wrappers:[8,1,0,"-"]},"mars_core.env.wrappers.gym_wrappers":{FrameStack:[8,2,1,""],ImageToPyTorch:[8,2,1,""],MaxAndSkipEnv:[8,2,1,""],NoopResetEnv:[8,2,1,""],WarpFrame:[8,2,1,""],wrap_pytorch:[8,0,1,""]},"mars_core.env.wrappers.gym_wrappers.FrameStack":{_get_ob:[8,3,1,""],reset:[8,3,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.gym_wrappers.ImageToPyTorch":{observation:[8,3,1,""]},"mars_core.env.wrappers.gym_wrappers.MaxAndSkipEnv":{reset:[8,3,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.gym_wrappers.NoopResetEnv":{reset:[8,3,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.gym_wrappers.WarpFrame":{observation:[8,3,1,""]},"mars_core.env.wrappers.mars_wrappers":{Atari2AgentWrapper:[8,2,1,""],Dict2TupleWrapper:[8,2,1,""],PettingzooClassicWrapper:[8,2,1,""],PettingzooClassic_Iterate2Parallel:[8,2,1,""],SlimeVolleyWrapper:[8,2,1,""]},"mars_core.env.wrappers.mars_wrappers.Atari2AgentWrapper":{close:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],spec:[8,4,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.mars_wrappers.Dict2TupleWrapper":{close:[8,3,1,""],observation_swapaxis:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],spec:[8,4,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.mars_wrappers.PettingzooClassicWrapper":{close:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],spec:[8,4,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.mars_wrappers.PettingzooClassic_Iterate2Parallel":{close:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],spec:[8,4,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.mars_wrappers.SlimeVolleyWrapper":{action_table:[8,5,1,""],close:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],spec:[8,4,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.vecenv_wrappers":{BaseVectorEnv:[8,2,1,""],CloudpickleWrapper:[8,2,1,""],DummyEnvWorker:[8,2,1,""],DummyVectorEnv:[8,2,1,""],EnvWorker:[8,2,1,""],RunningMeanStd:[8,2,1,""],ShArray:[8,2,1,""],SubprocEnvWorker:[8,2,1,""],SubprocVectorEnv:[8,2,1,""],_setup_buf:[8,0,1,""],_worker:[8,0,1,""]},"mars_core.env.wrappers.vecenv_wrappers.BaseVectorEnv":{_assert_id:[8,3,1,""],_assert_is_not_closed:[8,3,1,""],_wrap_id:[8,3,1,""],close:[8,3,1,""],normalize_obs:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],step:[8,3,1,""]},"mars_core.env.wrappers.vecenv_wrappers.DummyEnvWorker":{_abc_impl:[8,5,1,""],close_env:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],send_action:[8,3,1,""],wait:[8,3,1,""]},"mars_core.env.wrappers.vecenv_wrappers.EnvWorker":{_abc_impl:[8,5,1,""],close:[8,3,1,""],close_env:[8,3,1,""],get_result:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],seed:[8,3,1,""],send_action:[8,3,1,""],step:[8,3,1,""],wait:[8,3,1,""]},"mars_core.env.wrappers.vecenv_wrappers.RunningMeanStd":{update:[8,3,1,""]},"mars_core.env.wrappers.vecenv_wrappers.ShArray":{get:[8,3,1,""],save:[8,3,1,""]},"mars_core.env.wrappers.vecenv_wrappers.SubprocEnvWorker":{_abc_impl:[8,5,1,""],_decode_obs:[8,3,1,""],close_env:[8,3,1,""],get_result:[8,3,1,""],render:[8,3,1,""],reset:[8,3,1,""],result:[8,5,1,""],seed:[8,3,1,""],send_action:[8,3,1,""],wait:[8,3,1,""]},"mars_core.rl.algorithm":{dqn:[6,1,0,"-"],ppo:[7,1,0,"-"]},"mars_core.rl.algorithm.common.agent":{Agent:[5,2,1,""],MultiAgent:[5,2,1,""]},"mars_core.rl.algorithm.common.agent.Agent":{choose_action:[5,3,1,""],fix:[5,3,1,""],load_model:[5,3,1,""],ready_to_update:[5,4,1,""],save_model:[5,3,1,""],scheduler_step:[5,3,1,""],store:[5,3,1,""],update:[5,3,1,""],update_target:[5,3,1,""]},"mars_core.rl.algorithm.common.agent.MultiAgent":{choose_action:[5,3,1,""],load_model:[5,3,1,""],ready_to_update:[5,4,1,""],save_model:[5,3,1,""],scheduler_step:[5,3,1,""],store:[5,3,1,""],update:[5,3,1,""]},"mars_core.rl.algorithm.dqn":{DQN:[6,2,1,""],DQNBase:[6,2,1,""],DuelingDQN:[6,2,1,""],ParallelDQN:[6,2,1,""],ParallelDuelingDQN:[6,2,1,""]},"mars_core.rl.algorithm.dqn.DQN":{choose_action:[6,3,1,""],load_model:[6,3,1,""],ready_to_update:[6,4,1,""],save_model:[6,3,1,""],store:[6,3,1,""],update:[6,3,1,""]},"mars_core.rl.algorithm.dqn.DQNBase":{choose_action:[6,3,1,""],forward:[6,3,1,""],training:[6,5,1,""]},"mars_core.rl.algorithm.dqn.DuelingDQN":{net:[6,3,1,""],training:[6,5,1,""]},"mars_core.rl.algorithm.dqn.ParallelDQN":{choose_action:[6,3,1,""],training:[6,5,1,""]},"mars_core.rl.algorithm.dqn.ParallelDuelingDQN":{training:[6,5,1,""]},"mars_core.rl.algorithm.ppo":{PPO:[7,0,1,""],PPODiscrete:[7,2,1,""]},"mars_core.rl.algorithm.ppo.PPODiscrete":{choose_action:[7,3,1,""],load_model:[7,3,1,""],make_batch:[7,3,1,""],pi:[7,3,1,""],save_model:[7,3,1,""],store:[7,3,1,""],update:[7,3,1,""],v:[7,3,1,""]},"mars_core.utils":{data_struct:[9,1,0,"-"],func:[10,1,0,"-"],logger:[11,1,0,"-"]},"mars_core.utils.data_struct":{AttrDict:[9,2,1,""]},"mars_core.utils.func":{InDepthUpdateDictAwithB:[10,0,1,""],LoadYAML2Dict:[10,0,1,""],UpdateDictAwithB:[10,0,1,""]},"mars_core.utils.logger":{DummyLogger:[11,2,1,""],Logger:[11,2,1,""],TestLogger:[11,2,1,""],init_logger:[11,0,1,""]},"mars_core.utils.logger.DummyLogger":{log_episode_reward:[11,3,1,""],log_reward:[11,3,1,""],print_and_save:[11,3,1,""]},"mars_core.utils.logger.Logger":{_create_dirs:[11,3,1,""],log_episode_reward:[11,3,1,""],log_loss:[11,3,1,""],print_and_save:[11,3,1,""]},"mars_core.utils.logger.TestLogger":{_clear_dict:[11,3,1,""],_clear_dict_as_list:[11,3,1,""],_create_dirs:[11,3,1,""],log_episode_reward:[11,3,1,""],log_loss:[11,3,1,""],log_reward:[11,3,1,""],print_and_save:[11,3,1,""]}},objnames:{"0":["py","function","Python function"],"1":["py","module","Python module"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:function","1":"py:module","2":"py:class","3":"py:method","4":"py:property","5":"py:attribute"},terms:{"0":[0,3,6,8,11,12,13,14],"01":[12,14],"06581":6,"1":[5,6,8,11,12,13,14],"100":[],"1000":[0,12,14],"10000":[0,12,14],"1122":[12,14],"1511":6,"1e":[12,14],"1e5":[12,14],"2":[3,5,6,8,11,12,13,14],"20":[12,14],"200":[],"2000":0,"3":[5,6,8,11,12,13,14],"30":8,"30000":[12,14],"32":[12,14],"3500":0,"4":[8,12,14],"5":[0,3,8],"50":[],"500":0,"5000":0,"6":8,"64":[12,14],"7":8,"8":8,"9":8,"95":[12,14],"99":[12,14],"abstract":8,"case":[8,14],"class":[2,6,7,8,9,10,11],"default":[6,8,10,12,13,14],"do":[12,14],"float":[6,8,11,12,14],"function":[2,4,5,8,11,12,14],"import":[2,12,13,14,15,16],"int":[6,8,11,12,14],"long":0,"new":8,"return":[5,6,7,8,10,11],"static":8,"super":6,"true":[5,6,8,10,12,13,14,15,16],"var":8,"while":0,A:[2,4,5,6,8,10,11,12,13,14],And:[],As:[13,14],At:[0,13,14],But:8,By:[],For:[0,5,8,13,14],If:[4,5,8,13,14],In:[0,5,8,12,13,14],It:[0,8,12,13],Not:[],On:[],THE:[12,13,14,15,16],TO:[12,13,14,15,16],The:[0,2,5,8,11,12,13,14,16],There:[13,14],To:[0,3],_:8,__init__:6,_abc_data:8,_abc_impl:8,_assert_id:8,_assert_is_not_clos:8,_clear_dict:11,_clear_dict_as_list:11,_create_dir:11,_create_single_env:8,_decode_ob:8,_get_ob:8,_setup_buf:8,_worker:8,_wrap_id:8,a3c:[],a_lr:[],a_optim:[],ab:6,abc:8,abov:[0,8,13,14],ac:[],accept:8,accident:[],accord:[],achiev:[13,14],acoord:6,act_spac:[],action:[5,6,8,13,14],action_dict:8,action_dim:5,action_rang:[],action_spac:[],action_t:8,activ:[2,12,14],actor:[],adam:[12,14],add:[8,13,14],adopt:8,advantag:[12,14],advis:3,after:8,against:[0,13,14],against_baselin:[8,12,13,14],agent1_nam:8,agent2_nam:8,agent:[2,4,6,7,8,11,12,14],agent_arg:[12,14],al:13,alg:[],alg_param:[],algnam:[],algorithm:[1,2,5,6,7,8,10,12,14,15,16],algorithm_spec:[12,14],algorithms_for_calculating_vari:8,all:[3,5,8,10,12,13,14,15,16],almost:0,also:[0,2,12,13],altern:[13,14],although:[13,14],alwai:[13,14],among:8,amount:8,an:[0,2,5,8,12,13,14],ani:[5,8,10,11,14],anoth:[12,13,14],ansi:[],anyvalu:8,api:8,appli:[13,14],applic:2,approprit:[],approxim:[12,14],ar:[5,8,12,13,14,16],arbitrari:6,architectur:[0,6,12,14],archiv:[13,14],aren:[],arg:[5,6,7,8,9,11,12,13,14,15,16],argument:[5,6,8,11,12,13,14,15,16],arrai:8,arxiv:6,assert:8,assur:8,asychron:[],async:8,asynchron:8,atari2agentwrapp:8,atari:[8,13,14],attrdict:[9,10,11],attri:9,attribut:[9,10],atyp:0,automat:[8,12,13,14,15,16],auxiliari:8,avail:[13,14],averag:[12,13,14],b:[6,10],bad:0,base:[5,6,7,8,9,11],baselin:14,basevectorenv:8,basic:[0,6],basketball_pong_v1:[],batch:[8,12,14],batch_don:8,batch_info:8,batch_ob:8,batch_rew:8,batch_siz:[12,14],becaus:0,been:4,befor:[5,12,14],begin:[13,14],behavior:0,below:[],best:13,between:8,bigint:[],bit:[13,14],blank:[],block:8,bool:[5,6,8,10,11,12,14],both:[0,12,13,14],box2d:[],box:[2,12,13,14,15],boxing_v1:[],buffer:[12,13,14],build:[],build_env:[],c:6,c_lr:[],c_optim:[],call:[5,8,9,10],call_default_param:[],callabl:8,calul:8,can:[0,2,4,5,8,9,10,12,13,14],captur:4,cartpol:[2,12,14,15,16],categori:13,caus:0,cd:3,certain:13,champion:[13,14],chang:[8,9,12,13,14,15,16],charg:[13,14],check:[],checkpoint:[13,14],chess:4,choic:[13,14],choos:[5,6,12,13,14],choose_act:[5,6,7],chose:[],classic:8,classic_control:[],classifi:[12,13,14],cleanup:8,click:[],clip:[12,14],clone:[3,13,14],close:8,close_env:8,cloudpickl:8,cloudpicklewrapp:8,cn:2,coars:4,code:[2,3,8],collect:[8,13,14],color:[],com:[3,8],combat_plane_v1:[],combat_tank_v1:[],come:13,common:[5,6,7],compar:0,compet:4,competit:4,complet:[5,12,14],conduct:0,conf:[10,12,13,14,15],configur:[2,10,13,15,16],connect:8,consider:[13,14],consist:5,consumpt:[],contact:2,contain:[5,8,12,13,14],content:13,continu:[],control:[13,14],conveni:[13,14],convent:[],converg:0,cooper:4,copi:5,core:[2,8],correl:4,correspond:8,cost:8,could:[8,13,14],count:8,coupl:8,cpu:[12,14],creat:[8,11,12,13,14,15,16],critic:[],current:[8,13,14],current_model:5,custom:[],d:6,data:[2,7,8,11],data_struct:[9,10,11],david:13,ddpg:[],deal:8,debug:8,decai:[12,14],deep:[2,6,13,14],deepmind:[],def:[6,8],definit:5,delai:5,demonstr:0,deriv:13,descript:[2,7],detail:[12,13,14],determinist:[],develop:2,devic:[12,14],dfd:[],diagnost:8,dict2tuplewrapp:8,dict:[5,6,8,9,10,11,12,14],dictionari:[8,9,10],differ:[1,4,5,12,13,14],differenti:[],dimens:5,ding:2,direct:[3,13,14],directori:11,disabl:8,discount:[12,14],discret:3,displai:[],distribut:13,dm_control:[],doe:[5,11],don:[12,13,14,15],done:[5,8],dota:4,dou_dizhu_v3:[],doubl:[],double_dunk_v2:[],dppo:[],dqn:[1,2,12,14,15],dqnbase:6,drl:2,dropdown:[],dtype:8,due:[0,5,13,14],duel:[6,12,14],duelingdqn:6,dummi:8,dummyenvwork:8,dummylogg:11,dummyvectorenv:8,dure:[0,8],dynam:[8,13,14],e:[5,8,10,12,13,14,15,16],each:[2,5,8,10,12,13,14,15,16],earli:1,easier:0,easili:0,edu:2,effect:[13,14],effici:[13,14],effort:[13,14],efn:8,either:[4,5,6,7,8,12,13,14,16],elif:[],els:8,empti:[12,14],en:8,end:[8,12,14],enough:0,ensur:[],entombed_competitive_v2:[],entombed_cooperative_v2:[],entri:[9,10,12,14],env:[2,5,6,7,11,12,13,14,15,16],env_arg:[12,14],env_fn:8,env_fn_wrapp:8,env_id:8,env_list:[],env_nam:[8,12,14],env_num:8,env_typ:[8,12,14],env_wrapp:[],environ:[0,1,2,3,5,6,8,10,11,12,13],envnam:[],envtyp:[],envwork:8,episod:[0,8,12,13,14],episode_reward:11,episodeforsavingmodel:[12,14],episodic_upd:[12,14],epoch:[12,14],eps_clip:[12,14],eps_decai:[12,14],eps_fin:[12,14],eps_start:[12,14],epsilon:[5,6,12,14],eq:[],equal:8,equilibrium:[4,13],es:[13,14],escap:[],estim:[12,14],estimationtrain:[],et:13,eta:13,etc:[0,3,4,5,12,13,14],eval:[5,6,12,13,14,15,16],evalu:8,even:0,evolutionari:[13,14],exampl:[2,5,6,8,12,14],exce:[13,14],except:[],exert:3,exist:[4,5],exit:8,experi:[0,12,14],explicit:[],exploit:[2,5,16],extend:8,extrem:3,f1:6,f:[3,6],factor:[12,14],fals:[5,6,7,8,10,12,13,14],feel:2,fetch:8,fictiti:[2,5,12],file:[10,12,13,14],finish:8,first:[5,8,13,14],first_0:0,fix:[5,12,13,14,15,16],flag:4,flag_capture_v1:[],flavour:[],flexibl:[],folder:[12,14],follow:[12,13,14,16],foozpong_v1:[],format:[8,12,14],forward:[6,12,14],four:8,frame:[5,8,12,14],framestack:8,free:2,friendli:2,from:[0,3,5,8,10,12,13,14,15,16],full:[0,13,14],func:[10,12,13,14,15,16],fundament:2,further:8,g:[8,10,12,13,14,15,16],ga:[13,14],gae:[12,14],game:[0,4,5,8,12,13,14,15,16],gamma:[12,14],garbag:8,gener:[2,4,5,8,14],genet:[13,14],get:[2,8],get_result:8,git:3,github:[3,8],given:[5,8],go:[4,13,14],go_v3:[],goal:4,good:0,gpu:[12,14],gradient:[],greedi:[6,7,12,13],gym:[2,3,8,12,13,14,15,16],gym_cartpolev1_ppo:15,gym_wrapp:8,ha:[0,2,4,5,8],happen:5,hard:[0,13,14],harder:0,hardmaru:[8,13],have:[8,12,13,14],height:8,heinrich:13,help:8,here:[8,14,16],hidden:[12,14],hidden_activ:[12,14],hidden_dim:[],hidden_dim_list:[12,14],high:0,highlight:[],histor:13,hot:[13,14],how:[12,14],howev:13,http:[3,6,8],human:4,hyper:[0,10,12,13,14],hyperparamet:10,i:[5,8,12,13,14],ice_hockey_v1:[],id:8,imag:[0,8,12,13,14],imagetopytorch:8,imperfect:13,implement:[2,4,8,12,13,14],import_env:[8,12,13,14,15,16],improv:0,includ:[3,4,8,10,12,13,14,16],independ:8,indepthupdatedictawithb:10,index:[2,5,12,14],indic:[13,14],individu:2,inf:[12,14],infeas:[13,14],info:8,inform:[8,11,13,14],inherit:[6,8],init_logg:11,initi:[0,8,11,13,14],input:[5,6,10,12,13,14],insid:[13,14],instal:[],instanti:8,instead:[8,10,12,14],institut:2,intend:[12,14],interv:[12,14],intial:[],ipynb:[],ipywidget:[],issu:[13,14],item:[5,8],iter:[8,12,14],ith:8,its:[0,4,5,13,14],johann:13,join:2,joust_v2:[],jupyt:[],just:14,k_epoch:[12,14],keep:8,keep_info:8,kei:11,keyword:6,knowledg:[13,14],kwarg:[6,8,9],lack:[13,14],lambda:[8,12,14],larg:0,laserfram:8,lasertag:[3,12,14],last:8,lastest:0,later:8,latter:[],layer:[12,14],learn:[0,2,4,5,6,8,12,13,14,15,16],learn_param:[],learnabl:[5,14],learning_r:[12,14],least:13,leduc_holdem_v3:[],left:[12,14],len:8,length:[0,12,14],less:1,librari:4,licens:2,life:4,like:[4,5,13,14],line:8,linguist:[12,14],list:[5,8,11,12,13,14,16],load:[5,10,12,13,14,15,16],load_model:[5,6,7],load_model_full_path:[5,12,13,14,15,16],load_model_idx:[5,12,13,14,15,16],loadyaml2dict:[10,12,13,14,15,16],locat:[12,14],log:[11,12,14],log_avg_window:[12,14],log_episode_reward:11,log_interv:[12,14],log_loss:11,log_reward:11,logger:2,longer:0,look:5,loop:8,loser:[13,14],loss:[5,11,14],lot:4,made:4,mai:[3,8,12,14],mail:2,main:[5,8,12,13,14,16],maintain:13,make:[8,13,14],make_batch:7,make_env:[8,12,13,14,15,16],mani:[12,14],mar:[3,4,12,14,16],mario_bros_v2:[],markdown:[],marl:[2,4,5,12],marl_spec:[13,14],mars_cor:[5,6,7,8,9,10,11,12,14,15],mars_wrapp:8,mask:8,math:[],matter:[],max:8,max_episod:[12,14],max_step:[],max_steps_per_episod:[12,14],maxandskipenv:8,maxim:[12,13,14],maximum:4,maze_craze_v2:[],mean:[5,8,12,13,14],mechan:[13,14],mental:3,merg:10,mergeallsamplesinon:5,mergedefault:[10,12,13,14,15,16],metadata:[],method:[5,8,13,14],minim:6,miss:10,mix:4,mode:[5,11,12,13,14,15,16],model1:[12,13,14,15],model2:[12,13,14,15],model:[0,2,5,11,13,15,16],modif:[13,14],modifi:8,modul:2,more:1,moreov:[13,14],most:[4,8,13,14],move:8,mujoco:[],mulit:4,mulitpl:6,multi:[2,4,8,11,12,14],multi_step:[12,14],multiag:[5,12,13,14,15,16],multipl:[8,14],multiprocess:8,must:8,myenv:[],n:[4,13,14],n_frame:8,na:[],nabla:3,name:[8,10,12,14],name_scop:[],nan:[12,14],nash:[2,4,5],ndarrai:[5,6,8],necessari:[5,8,12,13,14,15,16],need:[0,1,3,5,6,12,13,14],nest:10,net:6,net_architectur:[12,14],net_arg:6,net_list:[],netbas:6,network:[0,6,12,13,14],neural:[2,5,12],never:[0,5],newlin:[],next:8,next_stat:5,nfsp:[5,8,13],nn:[12,14],nois:[13,14],noisi:[],none:[5,6,7,8,10,11,12,14],noop_max:8,noopresetenv:8,norm_ob:8,normal:8,normalis:8,normalize_ob:8,not_learn:5,not_learnable_list:5,note:[2,3,6,8,12],notebook:[],noth:[],notic:5,novic:2,now:8,np:[5,6,8],num_channel:8,num_env:[12,14],num_hidden_lay:[],number:[6,8,12,14],number_env:6,numpi:8,ob:8,object:[4,5,6,8,11,12,13,14],obs1:8,obs2:8,obs_buf:8,obs_rm:8,obs_spac:[],observ:[0,5,6,8,12,13,14],observation_mask:8,observation_spac:[],observation_swapaxi:8,observationwrapp:8,obsev:8,obvious:[13,14],off:[5,6,7,12,14],often:[],onc:[8,13,14],one:[5,8,12,13,14],ones:[0,8],onli:[5,8,11,13,14],open:[],openai:[2,3,8,12,13,14,15,16],oppon:[0,5,13,14],optim:[0,12,13,14],optimizers_list:[],option:[6,8,10,11],order:[],org:[6,8],origin:13,othello_v2:[],other:[5,6,8,13,14],other_info:5,otherwis:[8,13,14],otpim:[],our:[2,12,13,14],out:11,output:[8,12,14],output_activ:[12,14],outsid:10,over:[5,8],overal:[12,14],overrid:8,overview:[],overwritten:6,own:[5,8],p:8,page:2,paper:13,parallel:[0,5,6,8,12,14],parallel_algorithm:8,paralleldqn:6,parallelduelingdqn:6,param:8,paramet:[0,5,6,7,8,10,11,12,13,14],parent:8,parser:[12,14],part:[],pass:[6,8],path:[5,6,7,12,13,14,15,16],payoff:4,pdf:2,pendulum:[],per:[12,14],perform:[0,8,13,14],perspect:[13,14],pettingzoo:[2,3,8,12,13,14,15],pettingzoo_boxingv1_nfsp:13,pettingzoo_boxingv1_selfplay_dqn:15,pettingzooclassic_iterate2parallel:8,pettingzooclassicwrapp:8,pg:[],pi:7,pip3:3,pixel:[],plai:[2,5,12,15],player:[0,4,8,13],pleas:8,plot:[],point:[4,13,14],polici:[0,5,6,7,12,13,14],policy_network:[],pong:[13,14],pong_v1:[],pong_v2:[],pop:[],popul:[13,14],posit:0,potenti:13,ppo:[1,2,12,13,14,15],ppodiscret:7,practic:[13,14],pre:5,prefer:5,previou:[8,13,14],print:[6,11,12,13,14,15,16],print_and_sav:11,priorit:[],probabilist:13,probabl:[0,1,13],process:[0,5,12,14],profil:13,program:8,progress:4,project:2,proper:11,properli:[8,12,14],properti:[5,6,8,9],prose:3,prove:13,provid:[2,5,8,12,13,14],provok:3,proxim:[12,13,14],pseudorandom:[],put:[13,14],py:[],python:[8,12,14],pytorch:[3,4],q:[6,13,14],quadrapong_v2:[],quantumiracl:3,quick:2,r:3,rais:[],ram:[12,13,14],random:[8,12,13,14],randomli:[13,14],rang:[8,12,14],rate:[5,12,14],rather:[9,12,13,14],reach:[0,4,8],read:[12,14],reader:3,readi:[5,8],ready_to_upd:[5,6],reason:[13,14],recent:[4,13,14],recogn:[12,14],recolor:[13,14],recommend:[],refer:[8,14],region:[],reinforc:[2,4,6,13,14,16],rel:0,relu:[12,14],render:[8,12,13,14,15,16],repeat:8,replac:[10,13,14],replai:[12,14],replay_buffer_s:[12,14],repo:8,repositori:[13,14],repres:[],represent:[],reproduc:8,requir:[3,11,12,13,14,16],research:[2,4],reset:8,reshap:5,respons:[8,13],result:8,retrac:[],rew:8,reward:[0,5,8,11,12,14],rgb:[],rgb_arrai:[],rl:[0,1,2,5,6,7,12],rlbench:[],rlzoo:[],rm:8,robot:[],rollout:[5,8,12,13,14,15,16],rps_v1:[],run:[8,11,13],run_rlzoo:[],runningmeanstd:8,s:[5,7,8,13,14],sac:[],same:[0,8,10,13,14],sampl:[5,6,7,8,12,13,14],sample_dim:5,satisfi:[13,14],save:[8,11],save_interv:[],save_model:[5,6,7],scale:[],scene:8,schedul:5,scheduler_step:5,scheme:5,scratch:0,script:[2,12,13,14,16],search:2,second:[8,13,14],second_0:0,see:[0,6],seealso:[],seed:[8,12,14],seem:[13,14],seen:0,select:4,self:[2,5,6,8,12,15],send_act:8,sens:13,separ:[5,8],sequenc:8,sequenti:[8,12,14],serv:2,set:[0,4,5,8,12,13,14],set_se:[],sever:[12,13,14],sgd:[12,14],shall:4,shape:[5,8],share_memori:8,sharrai:8,shmemvectorenv:8,shorten:4,should:[8,13,14],show:0,side:[13,14],significantli:0,sill:0,silver:13,similar:[8,13,14],simpl:[],simpli:[13,14],simul:8,simultaneu:8,sinc:[5,11,12,13,14],singl:[2,8,11,12,13,14],size:[12,14],skip:[8,12,14],slider:[],slime:2,slimevollei:[2,3,8,12,13,14],slimevolley_slimevolleyv0_nash_dqn_exploit:13,slimevolley_slimevolleyv0_selfplay_dqn:13,slimevolley_slimevolleyv0_selfplay_ga:13,slimevolleygym:8,slimevolleynoframeskip:[],slimevolleypixel:[],slimevolleysurvivalnoframeskip:[],slimevolleywrapp:8,small2:[],small3:[],small4:[],so:[0,8,12,13,14],social:4,soft:[],solut:[13,14],solv:13,some:[0,2,8,12,13,15,16],someon:8,sometim:8,sourc:[3,5,6,7,8,9,10,11],space:[8,13,14],space_invaders_v1:[],space_war_v1:[],spec:8,specif:[5,8,12,14],specifi:[8,12,13,14,15,16],spend:8,springer:2,stabl:[1,4],stage:0,standard:[5,11],starcraft:4,start:[2,12,13,14],state:[5,6,8,13,14],state_dim:5,statist:8,std:8,step:[8,11,12,14],still:0,stochast:[],stochasticpolicynetwork:[],stop:1,store:[5,6,7],str:[8,10,11,12,14],strategi:[13,14],stream:8,string:[12,14],stringio:[],strong:3,strongli:3,structur:2,studio:4,style:[8,12,14],subclass:[6,8],subprocenvwork:8,subprocess:8,subprocvectorenv:8,subset:8,suit:[],suitabl:8,sum:[4,8,13],summari:7,supervis:13,support:[3,4,8,12,14,16],sure:8,surround_v1:[],symmetr:[13,14],symmetri:5,sync:8,synchron:8,t:[12,13,14,15],tabl:13,take:[5,12,13,14],tanh:[],target:[5,12,14],target_model:5,target_update_interv:[12,14],task:8,td3:[],td:[12,14],team:[2,8],tennis_v2:[],tensor:6,tensorboard:11,tensorlay:[],termin:[],test:[2,5,10,11,15],test_episod:[],testlogg:11,texas_holdem_no_limit_v3:[],texas_holdem_v3:[],text:[],textbook:2,tf:[],th:8,than:[9,12,13,14],thei:[8,13,14],them:[13,14],themselv:8,therefor:[5,13,14],thi:[0,2,3,8,12,13,14],thing:5,those:[3,8,13,14],three:[12,13,14],threshold:[13,14],through:[12,13,14],thu:[5,13,14],ti:[13,14],tianshou:8,tictactoe_v3:[],time:[0,8],timeout:8,timestamp:[12,14],timestep:[8,12,14],tip:3,toattr:[10,12,13,14,15,16],torch:[6,12,14],total:[13,14],track:8,train:[0,1,2,5,6,10,11,15],train_arg:[12,14],train_episod:[],train_start_fram:[12,14],trainable_agent_idx:14,trained_model:[12,13,14],transfer:5,transform:[8,10,13,14],transit:[7,13,14],trivial:[13,14],trpo:[],trust:[],tune:[12,14],tupl:8,turn:[],tutori:[2,13],twin:[],two:[0,4,12,13,14,15],type:[4,5,6,7,8,10,11,12,13,14],typic:[8,12,13,14,16],undefin:8,under:[2,12,14],unexploit:0,unfinish:8,union:[8,11],unit:[12,14],unless:14,uno_v3:[],unwrap:[],up:8,updat:[5,6,7,8,10,12,13,14],update_itr:[12,14],update_obs_rm:8,update_target:5,updatedictawithb:10,upgrad:3,us:[0,3,4,5,8,11,12,13,14,15,16],usag:[2,8,14,16],user:8,ustc:2,usual:[8,11],util:[9,10,11,12,13,14,15,16],v0:2,v1:[2,12,13,14,15,16],v:[7,11],valu:[0,8,12,13,14],value_network:[],valuenetwork:[],vanilla:[],vari:8,variabl:8,variou:4,vecenv_wrapp:8,vector:[8,13,14],vectorenv:8,version:[8,12],via:0,video:[],video_checkers_v3:[],view:[13,14],visual:[12,14],volleybal:2,volleyball_pong_v1:[],vpg:[],wai:[5,8],wait:8,wait_num:8,want:[2,5,12,13,14,15],warlords_v2:[],warpfram:8,wast:8,we:[0,1,2,4,5,8,12,13,14],weight:8,welfar:4,well:[4,8,13],what:5,whatev:[12,13,14],when:[5,8,12,13,14],where:2,whether:[5,8,10,12,14],which:[0,8,13,14],whole:0,wiki:8,wikipedia:8,window:[12,14],winner:[13,14],within:8,without:[0,13,14],withoverwrit:10,wizard_of_wor_v2:[],won:[],word:8,work:[],worker:8,worker_fn:8,would:[12,13,14],wrap:8,wrap_pytorch:8,wrapper:2,x:[6,7,8],x_0:3,x_1:3,x_2:3,x_3:3,x_4:3,x_:3,y:[],yaml:[10,12,13,14,16],yaml_fil:[10,12,13,14,15,16],yield:8,you:[2,3,8,12,13,14,15],younggyoseo:[],your:[2,8],zero:[4,13],zhding:2,zihan:2,zoo:2},titles:["Exploitability Test","Single-Agent Test","Welcome to MARS\u2019s documentation!","Installation","Introduction","Agent","DQN","PPO","Env","Data Structure","Functionality","Logger","General Description","Multi-Agent RL","Some Notes","A Quick Start","Single-Agent RL"],titleterms:{"class":5,"function":10,"import":8,A:15,agent:[1,5,13,15,16],agorithm:[],algorithm:13,anoth:[],box:0,cartpol:1,citat:2,configur:[12,14],contribut:2,data:9,descript:[12,13],document:2,dqn:[0,6,13],drl:[],env:8,environ:14,exampl:13,experi:2,exploit:[0,12,13,14],fictiti:13,gener:[12,13],guid:2,gym:1,indic:[],instal:[2,3],instruct:[],interact:[],introduct:[2,4],logger:11,mar:2,marl:[13,14],model:[12,14],multi:[5,13,15],nash:[0,13],neural:13,note:14,openai:1,overview:[],pettingzoo:0,plai:[0,13,14],ppo:7,primal:2,quick:15,refer:13,rl:[13,14,15,16],s:2,self:[0,13,14],simpl:[],singl:[1,5,15,16],slime:1,slimevollei:[0,1],some:14,start:15,structur:9,support:[],tabl:[],test:[0,1,12,13,14,16],train:[12,13,14,16],usag:[12,13],user:2,v0:[0,1],v1:0,volleybal:1,welcom:2,wrapper:8,zoo:[12,14]}})