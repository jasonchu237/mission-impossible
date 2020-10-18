/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (root === null) {
        return "";
    }
    
    let result = [""];
    dfs(root, result);
    return result[0].toString();
}; 

let dfs = (root, result) => {
    if (root === null) {
        return;
    }
    
    result[0] += root.val + ",";
    dfs(root.left, result);
    dfs(root.right, result);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (data === "") {
        return null;
    }
    
    let result = data.split(",");
    
    // !!!End position should be result.length - 2;
    return constructBST(result, 0, result.length - 2);
};

let constructBST = (result, start, end) => {
    if (start > end) {
        return null;
    }
    
    let cur = new TreeNode(parseInt(result[start]));
    let index;
    for (index = start; index <= end; index++) {
        if (parseInt(result[index]) > parseInt(result[start])) {
            break;
        }
    }
    
    cur.left = constructBST(result, start + 1, index - 1);
    cur.right = constructBST(result, index, end);
    
    return cur;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */