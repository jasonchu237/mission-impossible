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
var inorderTraversal = function(root) {
    let inorder = [];
    let stack = [];
    
    if (root === null) {
        return inorder;
    }
    
    let cur = root;
    while (stack.length !== 0 || cur !== null) {
        while (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        }
        
        if (stack.length !== 0) {
            cur = stack.pop();
            inorder.push(cur.val);
            cur = cur.right;
        }
    }
    
    return inorder;
};