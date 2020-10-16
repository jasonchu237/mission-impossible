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
    public int rangeSumBST(TreeNode root, int L, int R) {
        if (root == null) {
            return 0;
        }
        
        int[] sum = new int[] { 0 };
        rangeSumBST(root, L, R, sum);
        return sum[0];
    }
    
    private void rangeSumBST(TreeNode root, int L, int R, int[] sum) {
        if (root == null) {
            return;
        }
        
        if (root.val >= L && root.val <= R) {
            sum[0] = sum[0] + root.val;
        }
        
        rangeSumBST(root.left, L, R, sum);
        rangeSumBST(root.right, L, R, sum);
    }
}