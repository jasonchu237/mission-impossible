class Solution {
    public int findPairs(int[] nums, int k) {
        if (k < 0) {
            return 0;
        }
        
        int res = 0;
        
        Map<Integer, Integer> map = new HashMap<>();
        for (int n : nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }
        
        for (int n : map.keySet()) {
            if (k == 0) {
                if (map.get(n) >= 2) {
                    res++;
                }
            } 
            
            if (k > 0) {
                if (map.containsKey(n+k)) {
                    res++;
                }
            }
        }
        
        return res;
    }
}