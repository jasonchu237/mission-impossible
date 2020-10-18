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
    
    let result = "";
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let cur = queue.shift();
        if (cur !== null) {
            result += cur.val;
            queue.push(cur.left);
            queue.push(cur.right);
        } else {
            result += "null";
        }
        result += ","
    }
    console.log(result);
    
    return result;
};

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
    
    let queue = [];
    let result = data.split(",");
    console.log(result);
    let root = new TreeNode(result[0]);
    queue.push(root);
    
    for (let i = 1; i < result.length; i++) {
        // Handle last one ("") in result array after split
        if (result[i] === "") {
            continue;
        }
        
        let cur = queue.shift();
        if (result[i] !== "null") {
            let leftChild = new TreeNode(result[i]);
            cur.left = leftChild;
            queue.push(leftChild);
        }
        
        if (result[++i] !== "null") {
            let rightChild = new TreeNode(result[i]);
            cur.right = rightChild;
            queue.push(rightChild);
        }
    }
    
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */