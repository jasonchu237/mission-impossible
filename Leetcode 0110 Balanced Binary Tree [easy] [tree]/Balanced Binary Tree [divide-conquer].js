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
 * @return {boolean}
 */
class ResultType {
    constructor(maxDepth, isBalanced) {
        this.maxDepth = maxDepth;
        this.isBalanced = isBalanced;
    }
}

var isBalanced = function(root) {
    let result = isBalancedCheck(root);
    return result.isBalanced;
};

let isBalancedCheck = (root) => {
    if (root == null) {
        return new ResultType(0, true);
    }
    
    let left = isBalancedCheck(root.left);
    let right = isBalancedCheck(root.right);
    
    if (!left.isBalanced || !right.isBalanced) {
        return new ResultType(-1, false);
    }
    
    if (Math.abs(left.maxDepth - right.maxDepth) > 1) {
       return new ResultType(-1, false); 
    }
    
    return new ResultType(Math.max(left.maxDepth, right.maxDepth) + 1, true);
} 