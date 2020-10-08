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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = [];
    let path = [];
    findPathSum(root, sum, result, path);
    return result;
};

let findPathSum = (cur, sum, result, path) => {
    if (cur === null) {
        return;
    }
    
    if (cur.left === null && cur.right === null) {
        sum = sum - cur.val;
        if (sum === 0) {
            path.push(cur.val);
            result.push(path.slice(0));
            path.pop();
        }
        return;
    }
    
    path.push(cur.val);
    findPathSum(cur.left, sum - cur.val, result, path);
    findPathSum(cur.right, sum - cur.val, result, path);
    path.pop();
}