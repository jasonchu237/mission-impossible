class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> result = new ArrayList<>();
        if (s == null || s.length() == 0) {
            return result;
        }
        
        List<String> part = new ArrayList<>();
        dfs(s, result, part, 0);
        return result;
    }
    
    private void dfs(String s, List<List<String>> result, List<String> part, int start) {
        int size = s.length();
        if (start == size) {
            result.add(new ArrayList<>(part));
            return;
        }
        
        for (int i = start; i < size; i++) {
            if (isPalindrome(s, start, i)) {
                part.add(s.substring(start, i + 1));
                dfs(s, result, part, i + 1);
                part.remove(part.size() - 1);
            }
        }
    }
    
    private boolean isPalindrome(String s, int start, int end) {
        for (int i = start, j = end; i <= j; i++, j--) {
            if (s.charAt(i) != s.charAt(j)) {
                return false;
            }
        }
        return true;
    }
}
