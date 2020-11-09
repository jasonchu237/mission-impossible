/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let result = [];
    if (candidates === null || candidates.length === 0) {
        return result;
    }
    
    let combination = [];
    candidates.sort((a, b) => a - b);
    dfs(candidates, target, result, combination, 0);
    return result;
};

let dfs = (candidates, target, result, combination, index) => {
    if (target < 0) {
        return;
    }
    
    if (target === 0) {
        result.push(combination.slice(0));
        return;
    }
    
    for (let i = index; i < candidates.length; i++) {
        if (i != index && candidates[i] === candidates[i - 1]) {
            continue;
        }
        combination.push(candidates[i]);
        dfs(candidates, target - candidates[i], result, combination, i + 1);
        combination.pop();
    }
}