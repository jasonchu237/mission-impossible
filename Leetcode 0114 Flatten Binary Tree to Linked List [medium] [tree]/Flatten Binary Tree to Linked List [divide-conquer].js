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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    flattenSubtree(root);
};

let flattenSubtree = (root) => {
    if (root === null) {
        return null;
    }
    
    let leftLast = flattenSubtree(root.left);
    let rightLast = flattenSubtree(root.right);
    
    if (leftLast !== null) {
        leftLast.right = root.right;
        root.right = root.left;
        root.left = null;
    }
    
    if (rightLast !== null) {
        return rightLast;
    }
    
    if (leftLast !== null) {
        return leftLast;
    }
    
    return root;
}