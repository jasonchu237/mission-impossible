/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let max = 0;
    let cur = 0;
    let allowFlips = 1;
    for (let num of nums) {
        if (num !== 0) {
            cnt++;
        } else {
            if (allowFlips !== 0) {
                cur = cnt + allowFlips;
                cnt = 0;
            }
        }
        
        max = Math.max(max, cnt + cur);
    }
    
    return max;
};