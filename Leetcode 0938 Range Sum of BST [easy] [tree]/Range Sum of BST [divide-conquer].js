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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    if (root === null) {
        return;
    }
    
    let sum = [0];
    
    rangeSum(root, L, R, sum);
    
    return sum[0];
};

let rangeSum = (root, L, R, sum) => {
    if (root === null) {
        return;
    }
    
    if (root.val >= L && root.val <= R) {
        sum[0] += root.val;
    }
    
    rangeSum(root.left, L, R, sum);
    rangeSum(root.right, L, R, sum);
}