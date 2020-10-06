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
    public List<Integer> preorderTraversal(TreeNode root) {
        
        List<Integer> preorder = new ArrayList<Integer>();
        Stack<TreeNode> stack = new Stack<TreeNode>();
        
        TreeNode cur = root;
        
        if (root == null) {
            return preorder;
        }
        
        while (!stack.empty() || cur != null) {
            
            while (cur != null) {
                preorder.add(cur.val);
                stack.push(cur);
                cur = cur.left;
            }
            
            if (!stack.empty()) {
                cur = stack.pop();
                cur = cur.right;
            }
        }
        
        return preorder;
        
    }
}