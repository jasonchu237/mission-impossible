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
        
        StringBuilder result = new StringBuilder();
        dfs(root, result);
        return result.toString();
    }
    
    private void dfs(TreeNode root, StringBuilder result) {
        if (root == null) {
            return;
        }
        
        result.append(root.val + ",");
        dfs(root.left, result);
        dfs(root.right, result);
    }

    // Decodes your encoded data to tree.
    public TreeNode deserialize(String data) {
        if (data.equals("")) {
            return null;
        }
        
        String[] result = data.split(",");
        return constructBST(result, 0, result.length - 1);
    }
    
    private TreeNode constructBST(String[] result, int start, int end) {
        if (start > end) {
            return null;
        }
        
        TreeNode cur = new TreeNode(Integer.parseInt(result[start]));
        int index;
        for (index = start; index <= end; index++) {
            if (Integer.parseInt(result[index]) > Integer.parseInt(result[start])) {
                break;
            }
        }
        
        cur.left = constructBST(result, start + 1, index - 1);
        cur.right = constructBST(result, index, end);
        
        return cur;
    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// String tree = ser.serialize(root);
// TreeNode ans = deser.deserialize(tree);
// return ans;