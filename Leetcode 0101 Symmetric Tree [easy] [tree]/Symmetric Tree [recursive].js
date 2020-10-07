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
var isSymmetric = function(root) {
    return isMirror(root, root);
};

let isMirror = (r1, r2) => {
    if (r1 === null && r2 === null) {
        return true;
    }
    
    if (r1 === null || r2 === null) {
        return false;
    }
    
    return (r1.val === r2.val) && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
}