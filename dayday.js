/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let item = [],
        res = [],
        sum = 0;
    bfs(1);

    function bfs(cur) {
        if (item.length === k) {
            if (sum === n)
                res.push(Array.from(item));
            return;
        }
        for (let i = cur; i <= 10 + item.length - k; i++) {
            item.push(i);
            sum += i;
            bfs(i + 1);
            sum -= i;
            item.pop();
        }
    }
    return res;
};