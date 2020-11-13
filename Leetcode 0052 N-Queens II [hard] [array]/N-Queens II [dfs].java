class Solution {
    public int count = 0;
    
    // 儲存存在座標差(col, row - col, row + col) 
    public Set<Integer> col = new HashSet<>();
    public Set<Integer> diff = new HashSet<>();
    public Set<Integer> sum = new HashSet<>();
    
    public int totalNQueens(int n) {
        if (n <= 0) {
            return count;
        }
        
        dfs(0, n);
        return count;
    }
    
    private void dfs(int curRow, int size) {
        if (curRow == size) {
            count++;
            return;
        }
        
        for (int i = 0; i < size; i++) {
            // 第i行還沒放過皇后
            // 在正對角線上沒有被放過皇后
            // 在逆對角線上沒有被放過皇后
            if (!col.contains(i) && !diff.contains(curRow - i) && !sum.contains(curRow + i)) {
                col.add(i);
                diff.add(curRow - i);
                sum.add(curRow + i);
                dfs(curRow + 1, size);
                col.remove(i);
                diff.remove(curRow - i);
                sum.remove(curRow + i);
            }
        }
    }
}