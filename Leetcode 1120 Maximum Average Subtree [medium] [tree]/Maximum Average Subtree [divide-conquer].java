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
    public int sum;
    public int size;
    public ResultType(int sum, int size) {
        this.sum = sum;
        this.size = size;
    }
}

class Solution {
    private TreeNode maxAveSubtree = null;
    private ResultType maxAveSubtreeInfo = null;
    
    public double maximumAverageSubtree(TreeNode root) {
        findMaxAveSubtree(root);
        return (double) maxAveSubtreeInfo.sum / maxAveSubtreeInfo.size;
    }
    
    private ResultType findMaxAveSubtree(TreeNode root) {
        if (root == null) {
            return new ResultType(0, 0);
        }
        
        ResultType left = findMaxAveSubtree(root.left);
        ResultType right = findMaxAveSubtree(root.right);
        ResultType curInfo = new ResultType(left.sum + right.sum + root.val, left.size + right.size + 1);
        
        if (maxAveSubtree == null) {
            maxAveSubtree = root;
            maxAveSubtreeInfo = curInfo;
        }
        
        if (curInfo.sum * maxAveSubtreeInfo.size > maxAveSubtreeInfo.sum * curInfo.size) {
            maxAveSubtreeInfo = curInfo;
            maxAveSubtree = root;
        }
        
        return curInfo;
    }
}