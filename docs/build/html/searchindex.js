Search.setIndex({docnames:["experiments/arbitrary_mdp","experiments/exploit","experiments/single_agent","index","installation/install","introduction/intro","mars/env/env","mars/equilibrium_solver/solvers","mars/marl/meta_learner","mars/rl/agent","mars/rl/dqn","mars/rl/ppo","mars/utils/data_struct","mars/utils/func","mars/utils/logger","user_guide/general","user_guide/marl","user_guide/notes","user_guide/quick_start","user_guide/sarl"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["experiments/arbitrary_mdp.md","experiments/exploit.md","experiments/single_agent.md","index.rst","installation/install.rst","introduction/intro.md","mars/env/env.rst","mars/equilibrium_solver/solvers.rst","mars/marl/meta_learner.rst","mars/rl/agent.rst","mars/rl/dqn.rst","mars/rl/ppo.rst","mars/utils/data_struct.rst","mars/utils/func.rst","mars/utils/logger.rst","user_guide/general.md","user_guide/marl.md","user_guide/notes.md","user_guide/quick_start.md","user_guide/sarl.md"],objects:{"mars.env":{import_env:[6,0,0,"-"]},"mars.env.import_env":{make_env:[6,1,1,""]},"mars.equilibrium_solver":{eq_ECOSsolver:[7,0,0,"-"],eq_GUROBIsolver:[7,0,0,"-"],eq_MWUsolver:[7,0,0,"-"]},"mars.equilibrium_solver.eq_ECOSsolver":{NashEquilibriumECOSSolver:[7,1,1,""]},"mars.equilibrium_solver.eq_GUROBIsolver":{NashEquilibriumGUROBISolver:[7,1,1,""]},"mars.equilibrium_solver.eq_MWUsolver":{NashEquilibriumMWUSolver:[7,1,1,""],NashEquilibriumParallelMWUSolver:[7,1,1,""],get_payoff_vector:[7,1,1,""]},"mars.marl":{double_oracle:[8,0,0,"-"],selfplay:[8,0,0,"-"]},"mars.marl.double_oracle":{NXDO2SideMetaLearner:[8,2,1,""],NXDOMetaLearner:[8,2,1,""]},"mars.marl.double_oracle.NXDO2SideMetaLearner":{step:[8,3,1,""],update_matrix:[8,3,1,""]},"mars.marl.double_oracle.NXDOMetaLearner":{evaluate:[8,3,1,""],step:[8,3,1,""],update_matrix:[8,3,1,""]},"mars.marl.meta_learner":{MetaLearner:[8,2,1,""]},"mars.marl.meta_learner.MetaLearner":{choose_action:[8,3,1,""],load_model:[8,3,1,""],save_model:[8,3,1,""],step:[8,3,1,""]},"mars.marl.selfplay":{FictitiousSelfPlay2SideMetaLearner:[8,2,1,""],FictitiousSelfPlayMetaLearner:[8,2,1,""],SelfPlay2SideMetaLearner:[8,2,1,""],SelfPlayMetaLearner:[8,2,1,""]},"mars.marl.selfplay.FictitiousSelfPlay2SideMetaLearner":{step:[8,3,1,""]},"mars.marl.selfplay.FictitiousSelfPlayMetaLearner":{step:[8,3,1,""]},"mars.marl.selfplay.SelfPlay2SideMetaLearner":{step:[8,3,1,""]},"mars.marl.selfplay.SelfPlayMetaLearner":{step:[8,3,1,""]},"mars.rl.agents":{dqn:[10,0,0,"-"],ppo:[11,0,0,"-"]},"mars.rl.agents.agent":{Agent:[9,2,1,""]},"mars.rl.agents.agent.Agent":{choose_action:[9,3,1,""],fix:[9,3,1,""],load_model:[9,3,1,""],ready_to_update:[9,4,1,""],save_model:[9,3,1,""],scheduler_step:[9,3,1,""],store:[9,3,1,""],update:[9,3,1,""],update_target:[9,3,1,""]},"mars.rl.agents.dqn":{DQN:[10,2,1,""],DQNBase:[10,2,1,""],DuelingDQN:[10,2,1,""],ParallelDQN:[10,2,1,""],ParallelDuelingDQN:[10,2,1,""]},"mars.rl.agents.dqn.DQN":{choose_action:[10,3,1,""],load_model:[10,3,1,""],ready_to_update:[10,4,1,""],reinit:[10,3,1,""],save_model:[10,3,1,""],store:[10,3,1,""],update:[10,3,1,""]},"mars.rl.agents.dqn.DQNBase":{choose_action:[10,3,1,""],forward:[10,3,1,""],reinit:[10,3,1,""],training:[10,5,1,""]},"mars.rl.agents.dqn.DuelingDQN":{net:[10,3,1,""],reinit:[10,3,1,""],training:[10,5,1,""]},"mars.rl.agents.dqn.ParallelDQN":{choose_action:[10,3,1,""],training:[10,5,1,""]},"mars.rl.agents.dqn.ParallelDuelingDQN":{training:[10,5,1,""]},"mars.rl.agents.multiagent":{MultiAgent:[9,2,1,""]},"mars.rl.agents.multiagent.MultiAgent":{choose_action:[9,3,1,""],load_model:[9,3,1,""],ready_to_update:[9,4,1,""],save_model:[9,3,1,""],scheduler_step:[9,3,1,""],store:[9,3,1,""],update:[9,3,1,""]},"mars.rl.agents.ppo":{PPO:[11,1,1,""],PPODiscrete:[11,2,1,""]},"mars.rl.agents.ppo.PPODiscrete":{choose_action:[11,3,1,""],load_model:[11,3,1,""],make_batch:[11,3,1,""],pi:[11,3,1,""],reinit:[11,3,1,""],save_model:[11,3,1,""],store:[11,3,1,""],update:[11,3,1,""],v:[11,3,1,""]},"mars.utils":{data_struct:[12,0,0,"-"],func:[13,0,0,"-"],logger:[14,0,0,"-"]},"mars.utils.data_struct":{AttrDict:[12,2,1,""]},"mars.utils.func":{InDepthUpdateDictAwithB:[13,1,1,""],LoadYAML2Dict:[13,1,1,""],UpdateDictAwithB:[13,1,1,""],get_exploiter:[13,1,1,""],get_general_args:[13,1,1,""],get_latest_file_in_folder:[13,1,1,""],get_model_path:[13,1,1,""],multiprocess_buffer_register:[13,1,1,""]},"mars.utils.logger":{DummyLogger:[14,2,1,""],Logger:[14,2,1,""],TestLogger:[14,2,1,""],init_logger:[14,1,1,""]},"mars.utils.logger.DummyLogger":{log_episode_reward:[14,3,1,""],log_reward:[14,3,1,""],print_and_save:[14,3,1,""]},"mars.utils.logger.Logger":{_create_dirs:[14,3,1,""],log_episode_reward:[14,3,1,""],log_loss:[14,3,1,""],print_and_save:[14,3,1,""]},"mars.utils.logger.TestLogger":{_clear_dict:[14,3,1,""],_clear_dict_as_list:[14,3,1,""],_create_dirs:[14,3,1,""],add_extr_log:[14,3,1,""],log_episode_reward:[14,3,1,""],log_loss:[14,3,1,""],log_reward:[14,3,1,""],print_and_save:[14,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:property","5":"py:attribute"},terms:{"0":[1,4,8,10,14,15,16,17,18],"01":[15,17],"01561":1,"04252":7,"06426":8,"06581":10,"1":[1,8,9,10,14,15,16,17,18],"10":7,"100":7,"1000":[1,15,17],"10000":[1,15,17],"1024":1,"1122":[15,17],"1145":7,"1511":10,"16":1,"1802":1,"1807":7,"1e":[15,17],"1e5":[15,17],"2":[0,1,4,8,9,10,14,15,16,17],"20":[15,17],"2000":1,"2103":8,"3":[0,8,9,10,14,15,16,17],"30000":[15,17],"32":[1,15,17],"3219166":7,"3219235":7,"3500":1,"4":[1,15,17],"4vu0l6ubun8aaaaa":7,"5":[1,4],"500":1,"5000":1,"64":[1,15,17,18],"8":1,"95":[15,17],"99":[15,17],"case":[0,17],"class":[3,10,11,12,13,14],"default":[10,11,13,15,16,17],"do":[15,17],"final":1,"float":[9,10,11,14,15,17],"function":[0,3,5,6,9,10,11,14,15,17],"import":[15,16,17,18,19],"int":[9,10,11,14,15,17],"long":[1,8],"new":[1,8],"return":[6,7,9,10,11,13,14],"super":10,"true":[8,9,10,13,15,16,17,18,19],"while":[1,18],A:[1,3,5,6,7,8,9,10,13,14,15,16,17],As:[1,16,17],At:[1,16,17],For:[1,8,9,16,17],If:[5,8,9,16,17],In:[1,9,15,16,17],It:[1,15,16],THE:[15,16,17,18,19],TO:[15,16,17,18,19],The:[0,1,3,8,9,11,14,15,16,17,19],Then:1,There:[16,17],To:[0,1,4],_:[0,18],__init__:10,_clear_dict:14,_clear_dict_as_list:14,_create_dir:14,_exploit:18,ab:[1,7,10],abov:[1,16,17],accord:11,achiev:[8,16,17],acm:7,acoord:10,action:[0,9,10,11,16,17],action_dim:9,actiontyp:[10,11],activ:[1,3,15,17],actual:1,ad:8,adam:[15,17],add:[8,16,17],add_extr_log:14,adopt:[10,11],advantag:[15,17],advis:4,affect:17,after:8,against:[1,8,16,17],against_baselin:[15,16,17,18],agent:[0,1,3,5,6,8,10,11,14,15,17],agent_arg:[15,17],agorithm:11,al:16,algorithm:[2,3,9,10,11,13,15,17,18,19],algorithm_spec:[15,17],all:[0,4,6,8,9,13,15,16,17,18,19],allow:0,almost:1,also:[1,3,8,15,16],altern:[16,17],although:[16,17],alwai:[8,16,17],an:[0,1,3,8,9,15,16,17],ani:[9,13,14,17],anoth:[1,15,16,17],append:18,appli:[16,17],applic:3,approxim:[15,17],ar:[0,1,9,15,16,17,19],arbitrari:10,architectur:[1,10,15,17],archiv:[16,17],arg:[6,7,8,9,10,11,12,13,14,15,16,17,18,19],argpars:18,argument:[6,9,10,11,14,15,16,17,18,19],arrai:[1,7],arxiv:[1,7,8,10],assign:8,assum:7,atari:[16,17],attrdict:[9,12,13,14],attri:12,attribut:[12,13],atyp:1,automat:[15,16,17,18,19],avail:[8,16,17],averag:[1,8,15,16,17],b:[7,8,10,13],backbon:1,bad:1,base:[8,9,10,11,12,14],baselin:[1,17],basic:[1,10],basketball_pong_v2:6,batch:[0,11,15,17],batch_siz:[15,17],becaus:1,been:[5,8],befor:[1,9,15,17],begin:[16,17],behavior:1,below:17,best:[1,8,16,17],bit:[16,17],blob:1,block:1,bool:[8,9,10,11,13,15,17],borrow:1,both:[1,8,15,16,17],box:[3,15,16,17,18],boxing_v1:[6,18],buffer:[10,13,15,16,17],buffer_init:10,bunch:17,c:[7,10],call:[9,12,13],can:[0,1,3,5,8,9,12,13,15,16,17],captur:5,care:17,cartpol:[3,15,17,18,19],casa_token:7,categori:16,caus:1,cd:4,certain:[8,16],champion:[16,17],chang:[12,15,16,17,18,19],channel:1,charg:[16,17],checkpoint:[8,16,17],chess:5,choic:[16,17],choos:[9,10,11,15,16,17],choose_act:[8,9,10,11],classifi:[15,16,17],clip:[15,17],clone:[4,16,17],close:18,cn:3,cnn:1,coars:5,code:[3,4],collect:[16,17],column:[7,8],com:[1,4,6,7],combat_plane_v1:6,combat_tank_v1:6,come:16,common:[1,10],compar:1,compet:5,competit:5,complet:[9,15,17],comput:11,conduct:1,conf:[13,15,16,17,18,19],configur:[3,13,16,18,19],configurationdict:11,consid:1,consider:[16,17],consist:9,constant:1,construct:18,contact:3,contain:[9,15,16,17],content:16,control:[16,17],conveni:[16,17],converg:[0,1],cooper:5,copi:[9,18],core:3,correl:[5,7],could:[6,16,17],cpu:[11,15,17],creat:[6,14,15,16,17,18,19],current:[8,16,17],current_model:9,d:10,daemon:18,data:[3,11,14,18],data_struct:[9,12,13,14],david:16,decai:[15,17],decreas:1,deep:[3,10,16,17],def:10,defaulf:13,definit:9,delai:9,demonstr:1,depend:[0,8],deriv:16,descript:3,detail:[15,16,17],develop:3,devic:[11,15,17],dict:[6,9,10,12,13,14,15,17],dictionari:[12,13],differ:[2,5,9,10,11,15,16,17],dimens:9,ding:3,direct:[4,16,17],directionari:14,directori:14,discount:[15,17],discret:[4,11],distribut:16,dl:7,doe:[1,9,14],doi:7,don:[15,16,17,18],done:[1,9],dota:5,dou_dizhu_v3:6,doubl:3,double_dunk_v2:6,double_oracl:8,dqn:[0,2,3,15,17,18],dqnbase:10,drl:3,due:[1,9,16,17],duel:[10,15,17],duelingdqn:10,dummylogg:14,dure:[1,17],duy0eztswzrjobqiue9r:7,dynam:[16,17],e:[0,1,9,11,13,15,16,17,18,19],each:[0,1,3,8,9,11,13,15,16,17,18,19],earli:2,easier:1,easili:1,eco:3,edu:3,effect:[16,17],effici:[16,17],effort:[16,17],either:[1,5,9,15,16,17,19],embotech:7,empti:[15,17],end:[8,15,17],enough:[1,8],entombed_competitive_v2:6,entombed_cooperative_v2:6,entri:[12,13,15,17],env:[3,8,9,10,11,13,14,15,16,17,18,19],env_arg:[15,17],env_nam:[15,17],env_typ:[15,17],environ:[0,1,2,3,4,9,10,11,13,14,15,16],episod:[1,8,15,16,17],episode_reward:14,episodeforsavingmodel:[15,17],episodic_upd:[15,17],epoch:[15,17],eps_clip:[15,17],eps_decai:[15,17],eps_fin:[15,17],eps_start:[15,17],epsilon:[9,10,15,17],eq_ecossolv:7,eq_gurobisolv:7,eq_mwusolv:7,equilibrium:[3,5,16],equilibrium_solv:7,es:[16,17],essenti:0,estim:[15,17],et:16,eta:16,etc:[1,4,5,9,15,16,17],eval:[9,10,15,16,17,18,19],eval_episod:8,evalu:[1,8],even:1,evolutionari:[16,17],exact:1,exampl:[3,8,9,10,13,15,17],exce:[16,17],exert:4,exist:[5,9],experi:[1,15,17],explicitli:8,exploit:[0,3,9,18,19],exploitation_arg:18,exploiter_typ:13,explor:[10,11],extens:[3,8],extr_log_nam:14,extra:14,extrem:4,f1:10,f:[4,10,18],factor:[15,17],fals:[7,8,9,10,11,13,15,16,17,18],feel:3,fewer:17,fictiti:[3,8,9,15,17],fictitiousselfplay2sidemetalearn:8,fictitiousselfplaymetalearn:8,file:[13,15,16,17],fill:[13,18],find:7,finish:18,first:[1,9,16,17],first_0:1,fix:[1,9,15,16,17,18,19],flag:5,flag_capture_v1:6,folder:[13,15,17,18],follow:[1,8,15,16,17,19],foozpong_v2:6,forc:18,forkserv:18,form:[3,8],format:[15,17],forward:[10,11,15,17],frame:[9,15,17],free:[3,7],friendli:3,from:[1,4,7,9,10,11,13,15,16,17,18,19],full:[1,16,17],func:[13,15,16,17,18,19],fundament:3,g:[7,13,15,16,17,18,19],ga:[16,17],gae:[15,17],game:[1,5,7,8,9,15,16,17,18,19],game_matrix:7,game_typ:18,gamma:[0,15,17],gener:[1,3,5,9,17],genet:[16,17],get:3,get_exploit:[13,18],get_general_arg:[13,18],get_latest_file_in_fold:13,get_model_path:[13,18],get_payoff_vector:7,git:4,github:[1,4,6,7],give:[8,10,11],given:[7,9,13],go:[5,16,17],go_v3:6,goal:5,good:1,gpu:[11,15,17],gradient:7,greedi:[10,11,15,16,17],gurobi:3,gym:[3,4,6,15,16,17,18,19],gym_cartpolev1_dqn:[18,19],gym_cartpolev1_ppo:[],h:7,ha:[1,3,5,8,9],happen:9,hard:[1,16,17],harder:1,hardmaru:[6,16],have:[1,15,16,17],heinrich:16,here:[0,1,17,18,19],hidden:[1,15,17],hidden_activ:[15,17],hidden_dim_list:[15,17,18],high:1,higher:8,histor:[1,8,16],horizon:1,hot:[16,17],how:[15,17],howev:16,http:[1,4,6,7,8,10],human:5,hyper:[1,13,15,16,17],hyperparamet:13,i:[1,9,11,15,16,17],ice_hockey_v1:6,id:13,identif:14,idx:[8,18],imag:[1,15,16,17],impala:1,imperfect:16,implement:[3,5,15,16,17],import_env:[6,15,16,17,18,19],improv:1,includ:[4,5,13,15,16,17,19],indepthupdatedictawithb:13,index:[3,9,15,17],indic:[1,16,17],individu:[1,3],inf:[15,17],infeas:[16,17],info_queu:18,inform:[14,16,17],inherit:10,init_logg:14,initi:[1,14,16,17],input:[9,10,11,13,15,16,17],insid:[1,16,17],instanc:11,instead:[1,13,15,17],institut:3,intanti:18,intend:[15,17],interv:[8,15,17],invers:8,is_al:18,issu:[16,17],item:9,iter:[8,15,17],itr:7,its:[1,5,8,9,16,17],itself:8,johann:16,join:3,joust_v2:6,just:[17,18],k_epoch:[15,17],karg:8,kei:14,kernel:1,keyword:10,kill:18,knowledg:[16,17],kwarg:[9,10,12],lack:[16,17],lambda:[15,17],larg:[0,1],larger:17,lasertag:[3,4,6,15,17],last:8,lastest:1,latest:8,launch:18,layer:[1,15,17],leagu:[8,17],learn:[1,3,5,8,9,10,15,16,17,18,19],learnabl:[9,17],learner:3,learning_r:[15,17],least:16,leduc_holdem_v3:6,left:[15,17],length:[1,15,17],less:2,level:8,librari:5,licens:3,life:5,like:[1,5,9,16,17],linear:7,linguist:[15,17],list:[9,10,11,14,15,16,17,19],load:[9,13,15,16,17,18,19],load_id:18,load_model:[8,9,10,11],load_model_full_path:[9,15,16,17,18,19],load_model_idx:[9,15,16,17,18,19],loadyaml2dict:[13,15,16,17,18,19],locat:[15,17],log:[14,15,17],log_avg_window:[15,17],log_episode_reward:14,log_interv:[15,17],log_loss:14,log_reward:14,logger:[3,8],longer:[1,18],look:[1,9],loser:[16,17],loss:[9,14,17],lot:5,m:7,made:5,mai:[4,15,17],mail:3,main:[9,15,16,17,18,19],maintain:[8,16],make:[16,17],make_batch:11,make_env:[6,15,16,17,18,19],mani:[15,17],manner:8,mar:[4,5,6,7,8,9,10,11,12,13,14,15,17,18,19],mario_bros_v2:6,marl:[3,5,9,15],marl_spec:[16,17],mars_cor:[15,17,18],master:1,mathbb:0,matlab:7,matrix:[7,8],max_episod:[15,17],max_steps_per_episod:[15,17],maxim:[7,15,16,17],maximum:5,maze_craze_v2:6,mean:[8,9,15,16,17],mechan:[16,17],mental:4,merg:13,mergeallsamplesinon:9,mergedefault:[13,15,16,17,18],mergewith:13,meta:3,meta_learn:8,metalearn:8,method:[1,9,13,16,17,18],min:7,min_update_interv:8,minim:[10,17],minimax:7,minin:8,miss:13,mix:[5,7],mlp:1,mode:[9,14,15,16,17,18,19],model1:[15,16,17,18],model2:[15,16,17,18],model:[1,3,8,9,14,16,18,19],modif:[16,17],modul:3,more:2,moreov:[16,17],most:[5,16,17],mulit:5,mulitpl:[7,10],multi:[3,5,6,14,15,17],multi_step:[15,17],multiag:[9,15,16,17,18,19],multipl:[6,7,17,18],multiprocess:[13,18],multiprocess_buffer_regist:[13,18],mwu:3,n:[5,16,17],nabla:4,name:[13,15,17],nan:[15,17],nash:[0,3,5,7,9],nashequilibriumecossolv:7,nashequilibriumgurobisolv:7,nashequilibriummwusolv:7,nashequilibriumparallelmwusolv:7,ndarrai:[9,10],necessari:[6,9,15,16,17,18,19],necessarili:1,need:[1,2,4,8,9,10,15,16,17,18],nest:13,net:10,net_architectur:[15,17,18],net_arg:10,netbas:10,nets_init:10,network:[1,10,11,15,16,17],neural:[3,8,9,15],never:[1,9],next:0,next_stat:9,nfsp:[1,9,16],nn:[15,17],node:1,nois:[16,17],none:[8,9,10,11,13,14,15,17],not_learn:9,not_learnable_list:9,note:[3,4,10,15],notic:9,novic:3,np:[1,9,10],num_env:[15,17,18],number:[10,14,15,17],number_env:10,numpi:7,nxdo2sidemetalearn:8,nxdo:[3,8,17],nxdometalearn:8,object:[5,6,9,10,11,14,15,16,17],observ:[1,9,10,11,15,16,17],obvious:[16,17],off:[9,15,17],onc:[16,17],one:[1,9,15,16,17],ones:1,onli:[1,9,14,16,17,18],openai:[1,3,4,6,15,16,17,18,19],oppon:[1,8,9,16,17],opponent_polici:7,optim:[1,11,15,16,17],option:[8,9,10,11,13,14],oracl:3,org:[1,7,8,10],ori_arg:[13,18],origin:[1,16],othello_v2:6,other:[3,9,10,16,18],other_info:9,otherwis:[16,17],our:[3,15,16,17],out:14,output:[15,17],output_activ:[15,17],outsid:13,over:[8,9],overal:[15,17],overwrit:13,overwritten:10,own:9,p:18,page:3,paper:[1,16],parallel:[1,6,9,10,11,15,17],paralleldqn:10,parallelduelingdqn:10,param:[8,13],paramet:[1,6,9,10,11,13,14,15,16,17],parser:[15,17],pass:[10,18],path:[8,9,10,11,13,15,16,17,18,19],payoff:[5,7],payoff_matrix:7,pdf:[3,8],per:[0,15,17],perform:[1,8,16,17],period:8,perspect:[16,17],pettingzoo:[3,4,6,15,16,17,18],pettingzoo_boxing_v1_selfplai:18,pettingzoo_boxingv1_nfsp:16,pettingzoo_boxingv1_selfplay_dqn:[],pi:11,pip3:4,plai:[3,9,15,18],play_process:18,player:[0,1,5,7,8,16],point:[5,16,17],polici:[1,8,9,10,11,15,16,17],pong:[16,17],pong_v2:6,popul:[16,17],posit:1,potenti:16,ppo:[2,3,15,16,17,18],ppodiscret:11,practic:[16,17],pre:9,prefer:9,present:8,previou:[16,17,18],prime:0,print:[10,14,15,16,17,18,19],print_and_sav:14,prioriti:13,pro_id:18,probabilist:16,probabl:[1,2,16],process:[1,9,15,17,18],profil:16,program:7,progress:5,project:3,proper:[11,14,17],properli:[15,17],properti:[9,10,12],prose:4,prove:16,provid:[3,9,15,16,17],provok:4,proxim:[11,15,16,17],pseudo:17,put:[11,16,17],py:[0,1],python:[0,7,15,17],pytorch:[4,5],q:[0,10,16,17],quadrapong_v3:6,quantumiracl:4,queue:18,quick:3,r:[0,4],ram:[15,16,17],random:[10,11,15,16,17],randomli:[0,16,17],rang:[15,17,18],rate:[9,15,17],rather:[12,15,16,17],reach:[1,5],read:[15,17],reader:4,readi:[9,10],ready_to_upd:[9,10],reason:[16,17],recent:[5,8,16,17],recogn:[15,17],recolor:[16,17],ref:8,refer:[7,17],regist:13,reinforc:[3,5,10,16,17,19],reinit:[10,11],reiniti:10,rel:1,relu:[1,15,17],render:[15,16,17,18,19],replac:[13,16,17],replai:[15,17],replay_buffer_s:[15,17],repo:1,repositori:[16,17],requir:[1,4,14,15,16,17,19],research:[3,5],reshap:[9,11],residu:1,respect:7,respons:[1,8,16,17],result:1,reward:[0,1,8,9,14,15,17],rl:[1,2,3,8,9,10,11,15],rollout:[9,15,16,17,18,19],rolloutexperi:18,row:[7,8],rps_v1:6,rtype:13,rule:0,run:[0,14,16],run_nash_dqn_exploiter_simple_mdp:0,run_nash_dqn_simple_mdp:0,s:[0,7,8,9,11,16,17],same:[1,13,16,17],sampl:[0,9,10,11,15,16,17,18],sample_dim:9,sampletyp:[10,11],satisfi:[16,17],save:[8,14],save_checkpoint:8,save_id:[14,18],save_model:[8,9,10,11],schedul:[8,9],scheduler_step:9,schedulers_init:10,scheme:[8,9],scipi:7,score:8,score_avg_window:17,scratch:1,script:[3,15,16,17,19],search:3,second:[16,17],second_0:1,see:[1,6,10],seed:[15,17],seem:[16,17],seen:1,select:[5,17],self:[3,9,10,15,18],selfplai:[8,18],selfplay2sidemetalearn:8,selfplay_score_delta:17,selfplaymetalearn:8,sens:16,separ:[9,18],sequenti:[15,17],serv:3,set:[1,5,6,8,9,15,16,17],set_start_method:18,sever:[15,16,17],sgd:[15,17],shall:5,shape:9,share:13,shorten:5,should:[16,17],show:1,shown:1,side:[8,16,17],signific:1,significantli:1,sill:1,silver:16,sim:0,similar:[16,17],simpli:[16,17],sinc:[1,8,9,14,15,16,17],singl:[3,6,14,15,16,17],singleenvmultiagentsampletyp:11,size:[0,1,15,17],skip:[15,17],sl:1,slime:3,slimevollei:[3,4,6,15,16,17],slimevolley_slimevolleyv0_nash_dqn_exploit:16,slimevolley_slimevolleyv0_selfplay_dqn:16,slimevolley_slimevolleyv0_selfplay_ga:16,slimevolleygym:6,slimevolleynoframeskip:6,slimevolleypixel:6,slimevolleysurvivalnoframeskip:6,small2:6,small3:[3,6],small4:6,small:1,so:[1,15,16,17],social:5,solut:[16,17],solv:[7,16],solver:3,some:[1,3,15,16,18,19],son:7,sourc:[4,6,7,8,9,10,11,12,13,14],space:[11,16,17],space_invaders_v1:6,space_war_v1:6,spars:7,specif:[1,9,15,17],specifi:[6,15,16,17,18,19],springer:3,stabil:0,stabl:[2,5],stage:1,standard:[1,8,9,14],starcraft:5,start:[3,15,16,17],state:[0,8,9,10,11,16,17],state_dim:9,statetyp:[10,11],step:[8,14,15,17],still:1,stochast:[0,17],stop:2,store:[8,9,10,11,17],str:[8,9,13,14,15,17],strategi:[7,8,16,17],stride:1,string:[13,14,15,17],strong:4,strongli:4,structur:[3,11],studio:5,style:[15,17],sub:18,subclass:10,sum:[1,5,7,16],supervis:16,support:[4,5,6,15,17,19],surround_v1:6,symmetr:[16,17],symmetri:9,t:[0,7,15,16,17,18],tabl:16,take:[9,15,16,17],target:[9,15,17,18],target_model:9,target_update_interv:[15,17],td:[15,17],team:[3,6],tennis_v2:6,tensor:10,tensorboard:14,test:[3,9,13,14,18],testlogg:14,texas_holdem_no_limit_v3:6,texas_holdem_v3:6,textbook:3,than:[8,12,15,16,17],thei:[16,17],them:[8,16,17],therefor:[1,9,16,17],thi:[0,1,3,4,8,13,15,16,17,18],thing:9,those:[4,13,16,17],three:[15,16,17],threshold:[8,16,17],through:[15,16,17],thu:[9,16,17],ti:[16,17],tictactoe_v3:6,time:1,timestamp:[15,17],timestep:[0,1,15,17],tip:4,toattr:[13,15,16,17,18,19],togeth:8,torch:[10,15,17,18],total:[16,17],tournament:1,train:[1,2,3,8,9,10,13,14,18],train_arg:[15,17],train_start_fram:[15,17],trainable_agent_idx:17,trained_model:[15,16,17,18],transfer:9,transform:[13,16,17],transit:[0,11,16,17],tri:1,trivial:[16,17],tune:[15,17],tupl:[9,10,11],tutori:[3,16],two:[1,5,8,15,16,17,18],type:[1,5,6,9,10,11,13,14,15,16,17],typic:[1,15,16,17,19],u2s_pkbwz94kzxfizu8mtlwt7um:7,udpat:7,under:[3,15,17],unexploit:1,union:[9,10,11,14],unit:[8,15,17],unless:17,unlik:1,uno_v3:6,unstructur:11,updat:[0,7,8,9,10,11,13,15,16,17,18],update_itr:[15,17],update_matrix:8,update_process:18,update_target:9,updatedictawithb:13,updatemodel:18,us:[1,4,5,6,9,10,11,14,15,16,17,18,19],usag:[3,7,17,19],ustc:3,usual:[8,14],util:[9,12,13,14,15,16,17,18,19],v0:[3,6],v1:[3,15,16,17,18,19],v:[0,11,14],valu:[1,8,10,11,15,16,17],variou:5,vector:[16,17],vectorenv:6,verbos:[7,8],version:[1,8,15],via:[1,7],video_checkers_v3:6,view:[16,17],visual:[15,17],volleybal:3,volleyball_pong_v2:6,wai:9,want:[3,7,9,15,16,17,18],warlords_v2:6,wd7bhvzmypl:7,we:[0,1,2,3,5,9,15,16,17],weight:7,welfar:5,well:[5,16],what:9,whatev:[15,16,17],when:[8,9,15,16,17,18],where:[3,8],whether:[8,9,10,11,13,15,17],which:[1,8,16,17],whole:1,wiki:7,window:[15,17],winner:[16,17],without:[1,16,17],withoverwrit:13,wizard_of_wor_v2:6,worth:17,would:[15,16,17],x2hozu0od:7,x:[7,10,11],x_0:4,x_1:4,x_2:4,x_3:4,x_4:4,x_:4,yaml:[13,15,16,17,18,19],yaml_fil:[13,15,16,17,18,19],you:[3,4,15,16,17,18],younggyoseo:6,your:3,zero:[1,5,7,16],zhding:3,zihan:3,zoo:3},titles:["Arbitrary MDP Test","Exploitability Test","Single-Agent Test","Welcome to MARS\u2019s documentation!","Installation","Introduction","Environment","Equilibrium Solvers","MARL","Agent","DQN","PPO","Data Structure","Functionality","Logger","General Description","Multi-Agent RL","Some Notes","A Quick Start","Single-Agent RL"],titleterms:{"class":[8,9],"function":13,A:18,agent:[2,9,16,18,19],algorithm:16,arbitrari:0,box:1,cartpol:2,citat:3,configur:[15,17],contribut:3,data:12,descript:[15,16],document:3,doubl:[1,8],dqn:[1,10,16],eco:7,env:6,environ:[6,17],equilibrium:7,exampl:16,experi:3,exploit:[1,15,16,17],extens:1,fictiti:[1,16],form:1,gener:[15,16],guid:3,gurobi:7,gym:2,instal:[3,4],introduct:[3,5],lasertag:1,learner:8,logger:14,mar:3,marl:[8,16,17],mdp:0,meta:8,metalearn:[],model:[15,17],multi:[9,16,18],mwu:7,nash:[1,16],neural:[1,16],note:17,nxdo:1,openai:2,oracl:[1,8],other:17,pettingzoo:1,plai:[1,8,16,17],ppo:11,primal:3,quick:18,refer:16,rl:[16,17,18,19],s:3,self:[1,8,16,17],selfplai:[],singl:[2,9,18,19],slime:2,slimevollei:[1,2],small3:1,solver:7,some:17,start:18,structur:12,test:[0,1,2,15,16,17,19],train:[15,16,17,19],usag:[15,16],user:3,v0:[1,2],v1:1,volleybal:2,welcom:3,zoo:[15,17]}})