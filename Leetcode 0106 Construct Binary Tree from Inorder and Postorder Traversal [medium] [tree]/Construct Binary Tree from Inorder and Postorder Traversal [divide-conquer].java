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
    public TreeNode buildTree(int[] inorder, int[] postorder) {
        if (inorder == null || postorder == null || inorder.length != postorder.length) {
            return null;
        }
        
        return buildTree(inorder, postorder, 0, 0, inorder.length);
    }
    
    private TreeNode buildTree(int[] inorder, int[] postorder, int inorderStart, int postorderStart, int size) {
        if (size == 0) {
            return null;
        }
        
        TreeNode newRoot = new TreeNode(postorder[postorderStart + size - 1]);
        
        int inorderIndex = inorderStart;
        while (inorder[inorderIndex] != postorder[postorderStart + size - 1]) {
            inorderIndex++;
        }
        
        int leftSize = inorderIndex - inorderStart;
        int rightSize = size - leftSize - 1;
        TreeNode leftChild = buildTree(inorder, postorder, inorderStart, postorderStart, leftSize);
        TreeNode rightChild = buildTree(inorder, postorder, inorderIndex + 1, postorderStart + leftSize, rightSize);
        
        newRoot.left = leftChild;
        newRoot.right = rightChild;
        
        return newRoot;
    }
}