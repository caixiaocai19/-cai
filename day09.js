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
 var maxDepth = function(root) {
    let heigh=0;
    if(root){
        heigh++;
       let leftHeight = maxDepth(root.left);
       let rightHeight = maxDepth(root.right);
       heigh += leftHeight>rightHeight?leftHeight:rightHeight;
    }
    return heigh;
};