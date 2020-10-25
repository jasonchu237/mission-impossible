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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if (root === null) {
        return false;
    }
    
    let queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        let isXExist = false;
        let isYExist = false;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            // 確認x, y是否存在, 確認x, y 是否在同層, 確認x, y是否不同parent
            if (cur.val == x) {
                isXExist = true;
            }
            
            if (cur.val == y) {
                isYExist = true;
            }
            
            // 若為同parent, 直接返回false
            if (cur.left !== null && cur.right !== null) {
                if ((cur.left.val == x && cur.right.val == y) || (cur.left.val == y && cur.right.val == x)) {
                    return false;
                }
            }
            
            if (cur.left !== null) {
                queue.push(cur.left);
            }
            
            if (cur.right !== null) {
                queue.push(cur.right);
            }
        }
        
        if (isXExist && isYExist) {
            return true;
        } else if (isXExist || isYExist) {
            return false;
        }
    }
    
    return false;
};