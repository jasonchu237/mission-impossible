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
    public boolean isCousins(TreeNode root, int x, int y) {
        if (root == null) {
            return false;
        }
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        boolean isXExist = false;
        boolean isYExist = false;
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                if (cur.val == x) {
                    isXExist = true;
                }
                
                if (cur.val == y) {
                    isYExist = true;
                }
                
                if (cur.left != null && cur.right != null) {
                    if ((cur.left.val == x && cur.right.val == y) || (cur.left.val == y && cur.right.val == x)) {
                        return false;
                    }
                }
                
                if (cur.left != null) {
                    queue.offer(cur.left);
                }
                
                if (cur.right != null) {
                    queue.offer(cur.right);
                }
            }
            
            if (isXExist && isYExist) {
                return true;
            } else if (isXExist || isYExist) {
                return false;
            }
        }
        
        return false;
    }
}