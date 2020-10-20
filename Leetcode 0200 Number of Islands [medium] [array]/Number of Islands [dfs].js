/**
 * @param {character[][]} grid
 * @return {number}
 */
let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

var numIslands = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                dfs(grid, i, j, rows, cols);
            }
        }
    }
    
    return count;
};

let dfs = (grid, x, y, rows, cols) => {
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === '0') {
        return;
    }
    console.log(dirs);
    
    grid[x][y] = '0';
    for (let dir of dirs) {
        let neighborX = x + dir[0];
        let neighborY = y + dir[1];
        dfs(grid, neighborX, neighborY, rows, cols);
    }
}
    