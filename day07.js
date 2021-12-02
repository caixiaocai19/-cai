/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let res = [];
    while (queue.length !== 0) {
        let len = queue.length;
        let item = [], tem = null;
        for (let i = 0; i < len; i++) {
            tem = queue.shift();
            item.push(tem.val);
           for(let node of tem.children){
               queue.push(node);
           }
        }
        res.push(item);
    }
    return res;
};