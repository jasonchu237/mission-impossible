class Solution {
    public int[] sortedSquares(int[] A) {
        int[] result = new int[A.length];
        int start = 0;
        int end = A.length - 1;
        int cur = A.length - 1;
        while (start <= end) {
            if (A[start] * A[start] >= A[end] * A[end]) {
                result[cur] = A[start] * A[start];
                start++;
            } else {
                result[cur] = A[end] * A[end];
                end--;
            }
            cur--;
        }
        
        return result;
    }
}