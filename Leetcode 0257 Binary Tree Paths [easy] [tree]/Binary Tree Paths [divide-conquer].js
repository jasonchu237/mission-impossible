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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    if (root === null) {
        return paths;
    }
    
    if (root.left === null && root.right === null) {
        paths.push(root.val + "");
    }
    
    let leftPaths = binaryTreePaths(root.left);
    let rightPaths = binaryTreePaths(root.right);
    
    for (let path of leftPaths) {
        paths.push(root.val + "->" + path);
    }
    
    for (let path of rightPaths) {
        paths.push(root.val + "->" + path);
    }
    
    return paths;
};