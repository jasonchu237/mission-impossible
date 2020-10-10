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
 * @return {number}
 */
var countUnivalSubtrees = function(root) {
    if (root === null) {
        return 0;
    }
    
    let count = [0];
    isUniValueSubtree(root, count);
    return count[0];
};

let isUniValueSubtree = (root, count) => {
    if (root === null) {
        return true;
    }
    
    let isLeftSubtreeUniValue = isUniValueSubtree(root.left, count);
    let isRightSubtreeUniValue = isUniValueSubtree(root.right, count);
    
    if (isLeftSubtreeUniValue && isRightSubtreeUniValue && (root.left === null || root.left.val === root.val) && (root.right === null || root.right.val === root.val)) {
        count[0]++;
        return true;
    }
    return false;
}