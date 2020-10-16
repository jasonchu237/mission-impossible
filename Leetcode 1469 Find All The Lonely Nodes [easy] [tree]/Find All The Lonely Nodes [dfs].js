/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    let lonelyNodes = [];
    if (root === null) {
        return lonelyNodes;
    }
    
    findLonelyNodes(root, lonelyNodes);
    return lonelyNodes;
};

let findLonelyNodes = (root, lonelyNodes) => {
    if (root === null) {
        return;
    }
    
    if (root.left !== null && root.right === null) {
        lonelyNodes.push(root.left.val);
    }
    
    if (root.left === null && root.right !== null) {
        lonelyNodes.push(root.right.val);
    }
    
    if (root.left !== null) {
        findLonelyNodes(root.left, lonelyNodes);
    }
    
    if (root.right !== null) {
        findLonelyNodes(root.right, lonelyNodes);
    }
}