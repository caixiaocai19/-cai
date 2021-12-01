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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root){
        return [];
    }
    let queue=[root];
    let res=[];
    while(queue.length!==0){
        let len=queue.length;
        let item=[],tem=null;
        for(let i=0;i<len;i++){
            tem=queue.shift();
            item.push(tem.val);
            tem.left&&queue.push(tem.left);
            tem.right&&queue.push(tem.right);
        }
        res.push(item);
    }
    return res;
};