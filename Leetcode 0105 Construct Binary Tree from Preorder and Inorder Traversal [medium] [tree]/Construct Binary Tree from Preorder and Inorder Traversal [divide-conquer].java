/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        if (preorder == null || inorder == null || preorder.length == 0 || preorder.length != inorder.length) {
            return null;
        }
        
        return createTree(preorder, inorder, 0, 0, preorder.length);
    }
    
    private TreeNode createTree(int[] preorder, int[] inorder, int inorderStart, int preorderStart, int size) {
        if (size == 0) {
            return null;
        }
        
        TreeNode newRoot = new TreeNode(preorder[preorderStart]);
        int inorderIndex = inorderStart;
        while (inorder[inorderIndex] != preorder[preorderStart]) {
            inorderIndex++;
        }
        
        int leftSize = inorderIndex - inorderStart;
        int rightSize = size - leftSize - 1;
        
        TreeNode leftChild = createTree(preorder, inorder, inorderStart, preorderStart + 1, leftSize);
        TreeNode rightChild = createTree(preorder, inorder, inorderIndex + 1, preorderStart + leftSize + 1, rightSize);
        
        newRoot.left = leftChild;
        newRoot.right = rightChild;
        
        return newRoot;
    }
}