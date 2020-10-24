/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    let queue = [];
    let depth = 0;
    queue.push(root);
    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curNode = queue.shift();
            for (let child of curNode.children) {
                queue.push(child);
            }
        }
        
        depth++;
    }
    
    return depth;
};