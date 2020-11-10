class Solution {
    public List<List<Integer>> subsetsWithDup(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        
        List<Integer> subset = new ArrayList<>();
        Arrays.sort(nums);
        dfs(nums, result, subset, 0);
        return result;
    }
    
    private void dfs(int[] nums, List<List<Integer>> result, List<Integer> subset, int index) {
        result.add(new ArrayList<>(subset));
        
        for (int i = index; i < nums.length; i++) {
            if (i != index && nums[i] == nums[i - 1]) {
                continue;
            }
            subset.add(nums[i]);
            dfs(nums, result, subset, i + 1);
            subset.remove(subset.size() - 1);
        }
    }
}