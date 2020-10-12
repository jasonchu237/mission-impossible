/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    private class ResultType {
        public int sum, size;
        public ResultType(int sum, int size) {
            this.sum = sum;
            this.size = size;
        }
    }
    
    private TreeNode subtree = null;
    private ResultType subtreeResult = null;
    
    public double maximumAverageSubtree(TreeNode root) {
        helper(root);
        double maxAvg = (double)subtreeResult.sum / subtreeResult.size;
        return maxAvg;
    }
    
    private ResultType helper(TreeNode root) {
        if (root == null) {
            return new ResultType(0, 0);
        }
        
        ResultType left = helper(root.left);
        ResultType right = helper(root.right);
        
        ResultType result = new ResultType(left.sum + right.sum + root.val, left.size + right.size + 1);
        
        if (subtree == null ||  subtreeResult.sum * result.size <  result.sum * subtreeResult.size) {
            subtree = root;
            subtreeResult = result;
        }
        
        return result;
    }
}