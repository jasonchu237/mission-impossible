class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums == null || nums.length == 0) {
            return result;
        }
        
        List<Integer> perm = new ArrayList<>();
        boolean[] isVisited = new boolean[nums.length];
        Arrays.sort(nums);
        dfs(nums, result, perm, isVisited);
        return result;
    }
    
    private void dfs(int[] nums, List<List<Integer>> result, List<Integer> perm, boolean[] isVisited) {
        if (perm.size() == nums.length) {
            result.add(new ArrayList<Integer>(perm));
            return;
        }
        
        for (int i = 0; i < nums.length; i++) {
            if (isVisited[i]) {
                continue;
            }
            
            if (i != 0 && isVisited[i - 1] == true && nums[i] == nums[i - 1]) {
                continue;
            }
            
            perm.add(nums[i]);
            isVisited[i] = true;
            dfs(nums, result, perm, isVisited);
            perm.remove(perm.size() - 1);
            isVisited[i] = false;
        }
    }
}