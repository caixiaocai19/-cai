/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [],
        item = [];
    nums = nums.sort((a, b) => a - b);
    dfs(0);

    function dfs(cur) {
        if (item.length === nums.length) {
            res.push(Array.from(item))
            return;
        }
        res.push(Array.from(item));
        for (let i = cur; i < nums.length; i++) {
            item.push(nums[i]);
            dfs(i + 1);
            item.pop();
        }
    }
    return res;
};