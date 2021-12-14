/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let arr = new Array(nums.length).fill(false);
    let res = [],
        item = [];
    dfs();

    function dfs() {
        if (item.length === nums.length) {
            res.push(Array.from(item));
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (arr[i]) {
                continue;
            }
            arr[i] = true;
            item.push(nums[i]);
            dfs();
            arr[i] = false;
            item.pop();
        }
    }
    return res;
};