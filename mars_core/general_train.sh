echo "Running DATE:" $(date +"%Y-%m-%d %H:%M")

DATE=`date '+%Y%m%d_%H%M'`
echo "Save as: " $DATE

declare -a envs=('pettingzoo_boxing_v1' 'pettingzoo_combat_plane_v1' 'pettingzoo_surround_v1')
# declare -a methods=('selfplay' 'fictitiousselfplay' 'nxdo' 'nxdo2' 'nfsp' 'nash_dqn' 'nash_dqn_exploiter')
declare -a methods=('selfplay' 'fictitious_selfplay' 'nxdo' 'nxdo2' 'nfsp' 'nash_dqn' 'nash_dqn_exploiter')
mkdir -p log/$DATE

for env in ${envs[@]}; do
    for method in ${methods[@]}; do
        echo python general_train.py --env $env --method $method --save_id $DATE output log to: log/$DATE/${env}_${method}.log &
        nohup python general_train.py --env $env --method $method --save_id $DATE > log/$DATE/${env}_${method}.log &
    done
done
