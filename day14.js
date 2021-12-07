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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let res=[];
    getPath(root,"");
    function getPath(root,path){
        if(root.left===null&&root.right===null){
            path+=root.val;
            res.push(path);
            return;
        }
        path+=root.val;
        root.left&&getPath(root.left,path+"->");
        root.right&&getPath(root.right,path+"->");
    }
    return res;
};