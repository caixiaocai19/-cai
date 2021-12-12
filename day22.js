/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let item = [],
        res = [];

    function isPalindrome(str) {
        let left = 0,
            right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    dfs(0);

    function dfs(cur) {
        if (cur === s.length) {
            res.push(Array.from(item));
            return;
        }
        for (let i = cur + 1; i <= s.length; i++) {
            if (isPalindrome(s.substring(cur, i))) {
                item.push(s.substring(cur, i));
                dfs(i);
                item.pop();
            }
        }
    }
    return res;
};