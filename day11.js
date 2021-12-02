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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    //确定递归函数的参数和返回值inverTree=function(root)
    //确定终止条件
    if(root===null){
        return root;
    }
    //确定节点处理逻辑 交换
    // inverNode(root.left,root.right);
    let tem = root.left;
    root.left = root.right;
    root.right = tem;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};