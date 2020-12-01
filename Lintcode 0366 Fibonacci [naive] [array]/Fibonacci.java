public class Solution {
    /**
     * @param n: an integer
     * @return: an ineger f(n)
     */
    public int fibonacci(int n) {
        // write your code here
        if (n == 1) {
            return 0;
        } else if (n == 2) {
            return 1;
        } else {
            int[] mem = new int[n];
            mem[0] = 0;
            mem[1] = 1;
        
            for (int i = 2; i < n; i++) {
                mem[i] = mem[i - 1] + mem[i - 2];
            }
            return mem[n - 1];
        }
    }
}