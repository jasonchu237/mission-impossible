class Solution {
    public int findNumbers(int[] nums) {
        int count = 0;
        for (int number : nums) {
            String num = String.valueOf(number);
            if (num.length() % 2 == 0) {
                count++;
            }
        }
        
        return count;
    }
}