/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let max = null;
    let second_max = null;
    let third_max = null;
    
    for (let num of nums) {
        if (num === max || num === second_max || num === third_max) {
            continue;
        }
        if (max === null || num > max) {
            third_max = second_max;
            second_max = max;
            max = num;
        } else if (second_max === null || num > second_max) {
            third_max = second_max;
            second_max = num;
        } else if (third_max === null || num > third_max) {
            third_max = num;
        }
    }
    
    if (third_max !== null) {
        return third_max;
    }
    return max;
};