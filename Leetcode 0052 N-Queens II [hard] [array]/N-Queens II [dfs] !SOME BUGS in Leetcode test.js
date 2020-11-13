/**
 * @param {number} n
 * @return {number}
 */
let count = 0;
let col = new Set();
let diff = new Set();
let sum = new Set();

var totalNQueens = function(n) {
    if (n <= 0) {
        return count;
    }
    
    dfs(0, n);
    return count;
};

let dfs = (curRow, size) => {
    if (curRow === size) {
        count = count + 1;
        return;
    }
    
    for (let i = 0; i < size; i++) {
        if (!col.has(i) && !diff.has(curRow - i) && !sum.has(curRow + i)) {
            col.add(i);
            diff.add(curRow - i);
            sum.add(curRow + i);
            dfs(curRow + 1, size);
            col.delete(i);
            diff.delete(curRow - i);
            sum.delete(curRow + i);
        }
    }
}