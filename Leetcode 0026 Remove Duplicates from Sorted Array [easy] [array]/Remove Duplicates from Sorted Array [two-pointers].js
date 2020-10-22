/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0, j = 1;
    while (j < nums.length) {
        if (nums[j] === nums[i]) {
            j++;
        } else {
            nums[++i] = nums[j];
            j++;
        }
    }
    
    return i + 1;
};