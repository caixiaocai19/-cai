/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let sum = nums.reduce((pre,cur)=>{
        return pre+cur;
    })
    if(sum%2!==0){
        return false;
    }
    let target = sum/2;
    let array = new Array(target+1).fill(0);
    for(let i=0;i<nums.length;i++){
        for(let j=target;j>=nums[i];j--){
            array[j] = Math.max(array[j],array[j-nums[i]]+nums[i]);
            if(array[j]===target){
                return true;
            }
        }
    }
    return array[target]===target;
};