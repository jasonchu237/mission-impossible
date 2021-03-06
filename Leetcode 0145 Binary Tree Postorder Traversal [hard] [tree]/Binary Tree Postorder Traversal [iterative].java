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

/**
 * Idea:
 * the result of reverse_postorder traversal of a binary tree would be the reverse of postorder traversal of a binary tree.
 * 
 * postorder(root):
 *  if root == null: return;
 *  postorder(root.left);
 *  postorder(root.right);
 *  print(root-val);
 * 
 * 
 * rev_postorder(root):
 *  if root == null: return;
 *  print(root-val);
 *  rev_postorder(root.right);
 *  rev_postorder(root.left);
 */