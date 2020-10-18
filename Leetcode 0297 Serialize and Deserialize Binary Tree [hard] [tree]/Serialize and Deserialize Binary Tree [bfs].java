/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Codec {

    // Encodes a tree to a single string.
    public String serialize(TreeNode root) {
        if (root == null) {
            return "";
        }
        
        Queue<TreeNode> queue = new LinkedList<>();
        StringBuilder result = new StringBuilder();
        
        queue.offer(root);
        while (!queue.isEmpty()) {
            TreeNode cur = queue.poll();
            if (cur == null) {
                result.append("null");
            } else {
                result.append(cur.val);
                queue.offer(cur.left);
                queue.offer(cur.right);
            }
            result.append(",");
        }
        
        return result.toString();
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data.equals("")) {
            return null;
        }
        
        String[] result = data.split(",");
        Queue<TreeNode> queue = new LinkedList<>();
        TreeNode root = new TreeNode(Integer.parseInt(result[0]));
        queue.offer(root);
        
        for (int i = 1; i < result.length; i++) {
            TreeNode cur = queue.poll();
            if (!result[i].equals("null")) {
                TreeNode leftChild = new TreeNode(Integer.parseInt(result[i]));
                queue.offer(leftChild);
                cur.left = leftChild;
            }
            
            if (!result[++i].equals("null")) {
                TreeNode rightChild = new TreeNode(Integer.parseInt(result[i]));
                queue.offer(rightChild);
                cur.right = rightChild;
            }
        }
                                    
        return root;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// TreeNode ans = deser.deserialize(ser.serialize(root));