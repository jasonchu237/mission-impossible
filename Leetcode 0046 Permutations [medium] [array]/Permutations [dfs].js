/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    if (nums === null || nums.length === 0) {
        return result;
    }
    
    let perm = [];
    let isVisited = new Array(nums.length).fill(false);
    dfs(nums, result, perm, isVisited);
    return result;
};

let dfs = (nums, result, perm, isVisited) => {
    if (perm.length === nums.length) {
        result.push(perm.slice(0));
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (isVisited[i]) {
            continue;
        }
        
        perm.push(nums[i]);
        isVisited[i] = true;
        dfs(nums, result, perm, isVisited);
        perm.pop();
        isVisited[i] = false;
    }
}