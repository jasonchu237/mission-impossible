class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        List<List<Integer>> result = new ArrayList<>();
        if (candidates == null || candidates.length == 0) {
            return result;
        }
        
        Arrays.sort(candidates);
        List<Integer> combination = new ArrayList<>();
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
            if (i != index && candidates[i] == candidates[i - 1]) {
                continue;
            }
            combination.add(candidates[i]);
            dfs(candidates, target - candidates[i], result, combination, i + 1);
            combination.remove(combination.size() - 1);
        }
    }
}