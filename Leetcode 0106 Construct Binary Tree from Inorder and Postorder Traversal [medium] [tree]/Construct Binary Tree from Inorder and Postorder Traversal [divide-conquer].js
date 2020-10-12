/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (inorder === null || postorder === null || inorder.length !== postorder.length) {
        return null;
    }
    return createTree(inorder, postorder, 0, 0, inorder.length);
};

let createTree = (inorder, postorder, inorderStart, postorderStart, size) => {
    if (size === 0) {
        return null;
    }
    
    let newRoot = new TreeNode(postorder[postorderStart + size - 1]);
    let inorderIndex = inorderStart;
    while (inorder[inorderIndex] !== postorder[postorderStart + size - 1]) {
        inorderIndex++;
    }
    
    let leftSize = inorderIndex - inorderStart;
    let rightSize = size - leftSize - 1;
    
    let leftChild = createTree(inorder, postorder, inorderStart, postorderStart, leftSize);
    let rightChild = createTree(inorder, postorder, inorderIndex + 1, postorderStart + leftSize, rightSize);
    
    newRoot.left = leftChild;
    newRoot.right = rightChild;
    return newRoot;
}
