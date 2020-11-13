/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let result = [];
    if (n <= 0) {
        return result;
    }
    
    let queensCol = [];
    dfs(0, result, queensCol, n);
    return result;
};

let dfs = (curRow, result, queensCol, size) => {
    if (curRow === size) {
        result.push(draw(queensCol));
        return;
    }
    
    for (let i = 0; i < size; i++) {
        if (isValid(queensCol, curRow, i)) {
            queensCol.push(i);
            dfs(curRow + 1, result, queensCol, size);
            queensCol.pop();
        }
    }
}

let isValid = (queensCol, row, col) => {
    for (let i = 0; i < queensCol.length; i++) {
        if (queensCol[i] === col) {
            return false;
        } else if (row + col === i + queensCol[i]) {
            return false;
        } else if (row - col === i - queensCol[i]) {
            return false;
        }
    }
    return true;
}

let draw = (queensCol) => {
    let chessboard = [];
    for (let i = 0; i < queensCol.length; i++) {
        let sb = "";
        for (let j = 0; j < queensCol.length; j++) {
            sb = sb + (j === queensCol[i] ? 'Q' : '.');
        }
        chessboard.push(sb);
    }
    return chessboard;
}