/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    let queue = [];
    
    if (root === null) {
        return result;
    }
    
    queue.push(root);
    
    while (queue.length !== 0) {
        let tempResult = [];
        let tempQue = [];
        
        while (queue.length !== 0) {
            let cur = queue.shift();
            
            if (cur.left) {
                tempQue.push(cur.left);
            }
            
            if (cur.right) {
                tempQue.push(cur.right);
            }
            
            tempResult.push(cur.val);
        }
        
        result.push(tempResult);
        queue = tempQue;
    }
    
    return result;
};