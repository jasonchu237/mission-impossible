/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder === null || inorder === null || preorder.length === 0 || preorder.length !== inorder.length) {
        return null;
    }
    
    return createTree(preorder, inorder, 0, 0, preorder.length);
};

let createTree = (preorder, inorder, inorderStart, preorderStart, size) => {
    if (size === 0) {
        return null;
    }
    
    let newRoot = new TreeNode(preorder[preorderStart]);
    let inorderIndex = inorderStart;
    while (inorder[inorderIndex] !== preorder[preorderStart]) {
        inorderIndex++;
    }
    
    let leftSize = inorderIndex - inorderStart;
    let rightSize = size - leftSize - 1;
    
    let leftChild = createTree(preorder, inorder, inorderStart, preorderStart + 1, leftSize);
    let rightChild = createTree(preorder, inorder, inorderIndex + 1, preorderStart + leftSize + 1, rightSize);
    newRoot.left = leftChild;
    newRoot.right = rightChild;
    
    return newRoot;
}