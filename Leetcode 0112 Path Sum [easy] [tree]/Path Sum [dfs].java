public /**
        * Definition for a binary tree node. public class TreeNode { int val; TreeNode
        * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
        * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
        * = left; this.right = right; } }
        */
class Solution {
    public boolean hasPathSum(TreeNode root, int sum) {
        if (root == null) {
            return false;
        }

        if (root.left == null && root.right == null) {
            sum -= root.val;
            if (sum == 0) {
                return true;
            }

            return false;
        }

        return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
    }
}class Path Sum [dfs] {
    
}
