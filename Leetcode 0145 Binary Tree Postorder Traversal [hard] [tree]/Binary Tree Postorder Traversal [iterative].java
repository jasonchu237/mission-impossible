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
    public List<Integer> postorderTraversal(TreeNode root) {
        LinkedList<Integer> postorder = new LinkedList<>();
        Stack<TreeNode> stack = new Stack<>();
        
        if (root == null) {
            return postorder;
        }
        
        stack.push(root);
        while (!stack.isEmpty()) {
            TreeNode cur = stack.pop();
            postorder.addFirst(cur.val);
            
            if (cur.left != null) {
                stack.push(cur.left);
            }
            
            if (cur.right != null) {
                stack.push(cur.right);
            }
        }
        
        return postorder;
    }
}