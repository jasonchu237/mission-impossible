class Solution {
    public int smallestDivisor(int[] nums, int threshold) {
        int max = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i];
            }
        }
        System.out.println(max);
        
        int start = 1;
        int end = max;
        while (start + 1 < end) {
            int mid = start + (end - start) / 2;
            if (isWithinThreshold(nums, threshold, mid)) {
                end = mid;
            } else {
                start = mid;
            }
        }
        
        if (isWithinThreshold(nums, threshold, start)) {
            return start;
        }
        return end;
    }
    
    private boolean isWithinThreshold(int[] nums, int threshold, int divisor) {
        int result = 0;
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] % divisor == 0) {
                result += (nums[i] / divisor);
            } else {
                result += (nums[i] / divisor) + 1;
            }
            
        }
        return result <= threshold;
    }
}