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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (root === null) {
        return 0;
    }
    
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

let dfs = (root, sum) => {
    if (root === null) {
        return 0;
    }
    
    sum -= root.val;
    
    return (sum === 0 ? 1 : 0) + dfs(root.left, sum) + dfs(root.right, sum);
}