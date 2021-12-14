/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
    let res = [],
        item = [];
    dfs(0);

    function dfs(cur) {
        let vis = new Array(202).fill(false);
        if (item.length >= 2) {
            res.push(Array.from(item));
        }
        for (let i = cur; i < nums.length; i++) {
            if ((vis[nums[i] + 100]) || (item.length >= 1 && nums[i] < item[item.length - 1])) {
                continue;
            }
            vis[nums[i] + 100] = true;
            item.push(nums[i]);
            dfs(i + 1);
            item.pop();
        }
    }
    return res;
};