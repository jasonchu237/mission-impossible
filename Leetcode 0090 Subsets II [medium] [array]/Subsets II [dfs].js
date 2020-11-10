/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let result = [];
    if (nums === null || nums.length === 0) {
        return result;
    }
    
    let subset = [];
    nums.sort((a, b) => a - b);
    dfs(nums, result, subset, 0);
    return result;
};

let dfs = (nums, result, subset, index) => {
    result.push(subset.slice(0));
    for (let i = index; i < nums.length; i++) {
        if (i != index && nums[i] === nums[i - 1]) {
            continue;
        }
        subset.push(nums[i]);
        dfs(nums, result, subset, i + 1);
        subset.pop();
    }
}