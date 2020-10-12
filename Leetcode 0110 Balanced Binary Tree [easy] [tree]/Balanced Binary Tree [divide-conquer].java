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
class ResultType {
    public int maxDepth;
    public boolean isBalanced;
    ResultType(int maxDepth, boolean isBalanced) {
        this.maxDepth = maxDepth;
        this.isBalanced = isBalanced;
    }
}

class Solution {
    public boolean isBalanced(TreeNode root) {
        ResultType result = isBalancedCheck(root);
        return result.isBalanced;
    }
    
    private ResultType isBalancedCheck(TreeNode cur) {
        if (cur == null) {
            return new ResultType(0, true);
        }
        
        ResultType left = isBalancedCheck(cur.left);
        ResultType right = isBalancedCheck(cur.right);
        
        if (!left.isBalanced || !right.isBalanced) {
            return new ResultType(-1, false);
        }
        
        if (Math.abs(left.maxDepth - right.maxDepth) > 1) {
            return new ResultType(-1, false);
        }
        
        return new ResultType(Math.max(left.maxDepth, right.maxDepth) + 1, true);
    }
}