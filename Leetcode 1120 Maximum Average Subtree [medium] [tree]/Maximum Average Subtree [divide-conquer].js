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
class ResultType {
    constructor(size, sum) {
        this.size = size;
        this.sum = sum;
    }
}

var maximumAverageSubtree = function(root) {
    let maxAveSubtree = null;
    let maxAveSubtreeInfo = null;
    
    let findMaxSubtree = (root) => {
        if (root == null) {
            return new ResultType(0, 0);
        }
        
        let left = findMaxSubtree(root.left);
        let right = findMaxSubtree(root.right);
        let curInfo = new ResultType(left.size + right.size + 1, left.sum + right.sum + root.val);
        
        if (maxAveSubtree === null || curInfo.sum * maxAveSubtreeInfo.size > maxAveSubtreeInfo.sum * curInfo.size) {
            maxAveSubtree = root;
            maxAveSubtreeInfo = curInfo;
        }
        
        return curInfo;
    }
    
    findMaxSubtree(root);
    return maxAveSubtreeInfo.sum / maxAveSubtreeInfo.size;
};

