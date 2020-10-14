/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) {
        return null;
    }
    
    let queue = [];
    queue.push(root);
    
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            
            if (i < size - 1) {
                cur.next = queue[0];
            }
            
            if (cur.left !== null) {
                queue.push(cur.left);
            }
            
            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }
    }
    return root;
};