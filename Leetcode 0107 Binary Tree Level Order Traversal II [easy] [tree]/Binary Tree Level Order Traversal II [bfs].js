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
var levelOrderBottom = function(root) {
    let result = [];
    if (root === null) {
        return result;
    }
    
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        let level = [];
        
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            level.push(cur.val);
            
            if (cur.left !== null) {
                queue.push(cur.left);
            }
            
            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }
        
        result.unshift(level);
    }
    
    return result;
};