/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for (let number of nums) {
        let num = number.toString();
        if (num.length % 2 === 0) {
            count++;
        }
    }
    
    return count;
};