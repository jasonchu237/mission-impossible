class Solution {
    private int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    public void solve(char[][] board) {
        if (board == null || board.length == 0 || board[0].length == 0) {
            return;
        }
        
        int rows = board.length;
        int cols = board[0].length;
        boolean[][] visited = new boolean[rows][cols];
        for (int j = 0; j < cols; j++) {
            if (board[0][j] == 'O') {
                dfs(board, 0, j, visited, false);
            }
            
            if (board[rows - 1][j] == 'O') {
                dfs(board, rows - 1, j, visited, false);
            }
        }
        
        for (int i = 0; i < rows; i++) {
            if (board[i][0] == 'O') {
                dfs(board, i, 0, visited, false);
            }
            
            if (board[i][cols - 1] == 'O') {
                dfs(board, i, cols - 1, visited, false);
            }
        }
        
        for (int i = 1; i < rows - 1; i++) {
            for (int j = 1; j < cols - 1; j++) {
                if (board[i][j] == 'O' && visited[i][j] == false) {
                    dfs(board, i, j, visited, true);
                }
            }
        }
    }
    
    private void dfs(char[][] board, int row, int col, boolean[][] visited, boolean flip) {
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] == 'X' || visited[row][col] == true) {
            return;
        }
        
        if (flip == true) {
            board[row][col] = 'X';
        }
        visited[row][col] = true;
        
        for (int[] dir : directions) {
            int neighborX = row + dir[0];
            int neighborY = col + dir[1];
            dfs(board, neighborX, neighborY, visited, flip);
        }
    }
}