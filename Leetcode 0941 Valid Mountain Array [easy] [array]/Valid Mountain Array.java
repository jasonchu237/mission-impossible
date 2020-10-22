class Solution {
    public boolean validMountainArray(int[] A) {
        if (A.length < 3) {
            return false;
        }
        
        int i = 0;
        while (i < A.length && i + 1 < A.length && A[i] < A[i + 1]) {
            i++;
        }
        
        // the array never increases or all elements are increasing (no decreasing)
        if (i == 0 || i + 1 >= A.length) {
            return false;
        }
        
        while (i < A.length && i + 1 < A.length) {
            if (A[i] <= A[i + 1]) {
                return false;
            }
            i++;
        }
        
        return true;
    }
}