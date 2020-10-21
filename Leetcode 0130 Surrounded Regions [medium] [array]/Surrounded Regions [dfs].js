/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];

var solve = function(board) {
    if (board === null || board.length === 0 || board[0].length === 0) {
        return;
    }    
    
    let rows = board.length;
    let cols = board[0].length;
    let visited = new Array(rows).fill(false).map(() => new Array(cols).fill(false));
    
    for (let j = 0; j < cols; j++) {
        if (board[0][j] === 'O') {
            dfs(board, 0, j, visited, false);
        }
        
        if (board[rows - 1][j] === 'O') {
            dfs(board, rows - 1, j, visited, false);
        }
    }
    
    for (let i = 0; i < rows; i++) {
        if (board[i][0] === 'O') {
            dfs(board, i, 0, visited, false);
        }
        
        if (board[i][cols - 1] === 'O') {
            dfs(board, i, cols - 1, visited, false);
        }
    }
    
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] === 'O' && visited[i][j] === false) {
                dfs(board, i, j, visited, true);
            }
        }
    }
};

let dfs = (board, row, col, visited, flip) => {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || visited[row][col] === true || board[row][col] === 'X') {
        return;
    } 
    
    visited[row][col] = true;
    if (flip === true) {
        board[row][col] = 'X';
    }
    
    for (let dir of directions) {
        let neighborX = row + dir[0];
        let neighborY = col + dir[1];
        dfs(board, neighborX, neighborY, visited, flip);
    }
}