/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let left = 0,
        right = 0,
        cnt = 0,
        max = 0;
    while (left <= right && right < s.length) {
        if (map.get(s[right])) {
            while (s[right] !== s[left]) {
                map.set(s[left], false);
                left++;
                cnt--;
            }
            left++;
        } else {
            map.set(s[right], true);
            cnt++;
            if (max < cnt) {
                max = cnt;
            }
        }
        right++;
    }
    return max;
};