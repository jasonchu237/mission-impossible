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
    let head = root;
    let cur = null;
    let prevNextLevelStart = null;
    let nextLevelStart = null;
    while (root !== null) {
        if (root.left !== null) {
            if (cur === null) {
                cur = root.left;
                nextLevelStart = root.left;
            } else {
                cur.next = root.left;
                cur = cur.next;
            }
        }   
        
        if (root.right !== null) {
            if (cur === null) {
                cur = root.right;
                nextLevelStart = root.right;
            } else {
                cur.next = root.right;
                cur = cur.next;
            }
        }
        
        root = root.next;
        if (root === null && prevNextLevelStart !== nextLevelStart) {
            prevNextLevelStart = nextLevelStart;
            root = nextLevelStart;
            cur = null;
        }
    }
    
    return head;
};