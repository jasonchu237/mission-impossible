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
    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> inorder = new ArrayList<>();
        traverse(root, inorder);
        return inorder;
    }
    
    private void traverse(TreeNode cur, List<Integer> result) {
        if (cur == null) {
            return;
        }
        
        traverse(cur.left, result);
        result.add(cur.val);
        traverse(cur.right, result);
    }
}