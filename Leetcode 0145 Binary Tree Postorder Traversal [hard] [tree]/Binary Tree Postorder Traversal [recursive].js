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
var postorderTraversal = function(root) {
    let postorder = [];
    traverse(root, postorder);
    return postorder;
};

let traverse = (cur, postorder) => {
    if (cur === null) {
        return;
    }
    
    traverse(cur.left, postorder);
    traverse(cur.right, postorder);
    postorder.push(cur.val);
}