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
var preorderTraversal = function(root) {
    let result = [];
    traverse(root, result);
    return result;
};

let traverse = (cur, result) => {
    if (cur === null) {
        return;
    }
    
    result.push(cur.val);
    traverse(cur.left, result);
    traverse(cur.right, result);
}