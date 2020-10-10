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
    public int countUnivalSubtrees(TreeNode root) {
        if (root == null) {
            return 0;
        }
        
        int[] count = new int[1];
        isUniValueSubtree(root, count);
        return count[0];
    }
    
    private boolean isUniValueSubtree(TreeNode root, int[] count) {
        if (root == null) {
            return true;
        }
        
        // check if left and right subtree is uni-value subtree
        boolean isleftUni = isUniValueSubtree(root.left, count);
        boolean isRightUni = isUniValueSubtree(root.right, count);
        
        // if left and right subtrees are uni-value subtrees, and also check corner case(root.left == null || root.right == null)
        if (isleftUni && isRightUni && (root.left == null || root.left.val == root.val) && (root.right == null || root.right.val == root.val)) {
            count[0]++;
            return true;
        }
        return false;
    }
}