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
    public List<List<Integer>> pathSum(TreeNode root, int sum) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        
        findPathSum(root, sum, result, path);
        
        return result;
    }
    
    private void findPathSum(TreeNode cur, int sum, List<List<Integer>> result, List<Integer> path) {
        if (cur == null) {
            return;
        }
        
        if (cur.left == null && cur.right == null) {
            sum -= cur.val;
            if (sum == 0) {
                path.add(cur.val);
                result.add(new ArrayList<>(path));
                path.remove(path.size() - 1);
            }
            
            return;
        }
        
        path.add(cur.val);
        findPathSum(cur.left, sum - cur.val, result, path);
        findPathSum(cur.right, sum - cur.val, result, path);
        path.remove(path.size() - 1);
    }
}