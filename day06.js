/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let res = [];
    while (queue.length !== 0) {
        let len = queue.length;
        let item = [], tem = null,sum=0;
        for (let i = 0; i < len; i++) {
            tem = queue.shift();
            sum+=tem.val;
            if (i === len - 1){
                item.push(sum/len);
            }
            tem.left && queue.push(tem.left);
            tem.right && queue.push(tem.right);
        }
        res.push(item);
    }
    return res;
};