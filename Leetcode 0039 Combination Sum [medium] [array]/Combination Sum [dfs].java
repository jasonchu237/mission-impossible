class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null) {
            return result;
        }
        
        List<Integer> combination = new ArrayList<>();
        Arrays.sort(candidates);
        dfs(candidates, target, result, combination, 0);
        return result;
    }
    
    private void dfs(int[] candidates, int target, List<List<Integer>> result, List<Integer> combination, int index) {
        if (target < 0) {
            return;
        }
        
        if (target == 0) {
            result.add(new ArrayList<Integer>(combination));
            return;
        }
        
        for (int i = index; i < candidates.length; i++) {
            combination.add(candidates[i]);
            dfs(candidates, target - candidates[i], result, combination, i);
            combination.remove(combination.size() - 1);
        }
    }
}