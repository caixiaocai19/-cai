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
 * @return {number}
 */
 var minDepth = function (root) {
    if (!root) {
       return 0;
   }
   let queue = [root];
   let cnt = 0;
   while (queue.length !== 0) {
       cnt++;
       let len = queue.length;
       let  tem = null;
       for (let i = 0; i < len; i++) {
           tem = queue.shift();
           if(!tem.left&&!tem.right) return cnt;
           tem.left && queue.push(tem.left);
           tem.right && queue.push(tem.right);
       }
   }
   return cnt;
};