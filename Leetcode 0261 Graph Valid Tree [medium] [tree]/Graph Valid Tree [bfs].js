/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (n === 0) {
        return false;
    }
    
    if (edges.length !== n - 1) {
        return false;
    }
    
    let graph = initializeGraph(n, edges);
    let queue = [];
    let set = new Set();
    queue.push(0);
    set.add(0);
    while (queue.length > 0) {
        let cur = queue.shift();
        for (let neighbor of graph.get(cur)) {
            if (set.has(neighbor)) {
                continue;
            }
            set.add(neighbor);
            queue.push(neighbor);
        }
    }
    
    return set.size === n;
    
};

let initializeGraph = (n, edges) => {
    let graph = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, new Set());
    }
    
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        graph.get(u).add(v);
        graph.get(v).add(u);
    }
    
    return graph;
}