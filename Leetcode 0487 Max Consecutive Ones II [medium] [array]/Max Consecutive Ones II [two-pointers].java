class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int cnt = 0;
        int cur = 0;
        int allowFlips = 1;
        for (int num : nums) {
            if (num != 0) {
                cnt++;
            } else {
                if (allowFlips >= 1) {
                    cur = cnt + allowFlips;
                    cnt = 0;
                }
            }
            max = Math.max(max, cnt + cur);
        }
        
        return max;
    }
}