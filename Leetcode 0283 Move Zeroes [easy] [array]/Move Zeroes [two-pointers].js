/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, j = 0;
    while (i < nums.length && j < nums.length) {
        if (nums[j] !== 0) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j++;
        } else {
            j++;
        }
    }
};