/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (node === null) {
        return node;
    }
    
    let nodes = getNodes(node);
    
    let mapping = new Map();
    for (let n of nodes) {
        mapping.set(n, new Node(n.val));
    }
    
    for (let n of nodes) {
        let newNode = mapping.get(n);
        for (let neighbor of n.neighbors) {
            let newNeighbor = mapping.get(neighbor);
            newNode.neighbors.push(newNeighbor);
        }
    }
    
    return mapping.get(node);
};

let getNodes = (node) => {
    let queue = [];
    let set = new Set();
    queue.push(node);
    set.add(node);
    while (queue.length > 0) {
        let cur = queue.shift();
        for (let neighbor of cur.neighbors) {
            if (set.has(neighbor)) {
                continue;
            }
            set.add(neighbor);
            queue.push(neighbor);
        }
    }
    
    return Array.from(set);
}