class Solution {
    public List<List<String>> solveNQueens(int n) {
        List<List<String>> result = new ArrayList<>();
        if (n <= 0) {
            return result;
        }
        
        List<Integer> queensCol = new ArrayList<>();
        dfs(0, queensCol, result, n);
        return result;
    }
    
    private void dfs(int curRow, List<Integer> queensCol, List<List<String>> result, int size) {
        if (curRow == size) {
            result.add(draw(queensCol));
            return;
        }
        
        for (int i = 0; i < size; i++) {
            if (isValid(queensCol, curRow, i)) {
                queensCol.add(i);
                dfs(curRow + 1, queensCol, result, size);
                queensCol.remove(queensCol.size() - 1);
            }
        }
    }

    /**
    判斷是否current coordinate是否合法:
    利用對角線相加, 與相減判斷兩對角線, 及是否在同行已有皇后, 本身遞歸過程已除去同列的可能
    */
    private boolean isValid(List<Integer> queensCol, int row, int col) {
        for (int i = 0; i < queensCol.size(); i++) {
            if (col == queensCol.get(i)) {
                return false;
            } else if (row + col == i + queensCol.get(i)) {
                return false;
            } else if (row - col == i - queensCol.get(i)) {
                return false;
            }
        }
        return true;
    }

    private List<String> draw(List<Integer> queensCol) {
        List<String> chessboard = new ArrayList<>();
        for (int i = 0; i < queensCol.size(); i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < queensCol.size(); j++) {
                sb.append(j == queensCol.get(i) ? 'Q' : '.');
            }
            chessboard.add(sb.toString());
        }
        return chessboard;
    }
}