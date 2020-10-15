/*
// Definition for a Node.
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node next;

    public Node() {}
    
    public Node(int _val) {
        val = _val;
    }

    public Node(int _val, Node _left, Node _right, Node _next) {
        val = _val;
        left = _left;
        right = _right;
        next = _next;
    }
};
*/

class Solution {
    public Node connect(Node root) {
        Node head = root;
        Node cur = null;
        Node nextLevelStart = null;
        Node prevNextLevelStart = null;
        while (root != null) {  
            if (root.left != null) {
                if (cur == null) {
                    cur = root.left;
                    nextLevelStart = root.left;
                    System.out.println(cur.val);
                } else {
                    cur.next = root.left;
                    cur = cur.next;
                    System.out.println(cur.val);
                }
                
                
            }
            
            if (root.right != null) {
                if (cur == null) {
                    cur = root.right;
                    nextLevelStart = root.right;
                    System.out.println(cur.val);
                } else {
                    cur.next = root.right;
                    cur = cur.next;
                    System.out.println(cur.val);
                }

            }
            
            root = root.next;
            // The second part of this line of condition check is for the bottom level. If you get rid of this line, you will get a TLE because there is a loop in the bottom level.`··
            if (root == null && prevNextLevelStart != nextLevelStart) {
                prevNextLevelStart = nextLevelStart;
                cur = null;
                root = nextLevelStart;
                System.out.println(root.val);
            }
        }
        
        return head;

    }
}