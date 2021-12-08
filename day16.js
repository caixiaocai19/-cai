/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
    let res=[];
    let len = cost.length;
    res[0]=cost[0];
    res[1]=cost[1];
    for(let i=2;i<cost.length;i++){
    
        res[i]=Math.min(res[i-1],res[i-2])+cost[i];
    }
    return res[len-1]>res[len-2]?res[len-2]:res[len-1];
};