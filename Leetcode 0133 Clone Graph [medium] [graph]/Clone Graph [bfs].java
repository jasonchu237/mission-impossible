/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

class Solution {
    public Node cloneGraph(Node node) {
        if (node == null) {
            return node;
        }
        
        // step 1: get all nodes
        List<Node> nodes = getAllNodes(node);
        
        // step 2: create all nodes based on all nodes get from step 1
        Map<Node, Node> mapping = new HashMap<>();
        for (Node n : nodes) {
            mapping.put(n, new Node(n.val));
        }
        
        // step 3: clone edges
        for (Node n : nodes) {
            Node newNode = mapping.get(n);
            for (Node neighbor : n.neighbors) {
                Node newNeighbor = mapping.get(neighbor);
                newNode.neighbors.add(newNeighbor);
            }
        }
        
        return mapping.get(node);
    }
    
    private List<Node> getAllNodes(Node node) {
        Queue<Node> queue = new LinkedList<>();
        Set<Node> set = new HashSet<>();
        queue.offer(node);
        set.add(node);
        while (!queue.isEmpty()) {
            Node cur = queue.poll();
            for (Node n : cur.neighbors) {
                if (set.contains(n)) {
                    continue;
                }
                set.add(n);
                queue.offer(n);
            }
        }
        
        return new ArrayList<Node>(set);
    }
}


