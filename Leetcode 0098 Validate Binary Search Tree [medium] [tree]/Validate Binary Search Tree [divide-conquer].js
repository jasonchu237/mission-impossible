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
var isValidBST = function(root) {
    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

let isValid = (root, min, max) => {
    if (root === null) {
        return true;
    }
    
    if (root.val >= max || root.val <= min) {
        return false;
    }
    
    return isValid(root.left, min, Math.min(max, root.val)) && isValid(root.right, Math.max(root.val, min), max);
}