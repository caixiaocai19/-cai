/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [],
        item = [];
    nums.sort((a, b) => a - b);
    let vis = new Array(nums.length).fill(false);
    dfs(0);

    function dfs(cur) {
        res.push(Array.from(item));
        for (let i = cur; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1]) continue;
            vis[i] = true;
            item.push(nums[i]);
            dfs(i + 1);
            vis[i] = false;
            item.pop();
        }
    }
    return res;
};