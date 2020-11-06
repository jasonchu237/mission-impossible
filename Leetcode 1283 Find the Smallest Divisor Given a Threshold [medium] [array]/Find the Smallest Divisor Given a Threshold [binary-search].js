/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    let max = Math.max(...nums);
    
    let start = 1;
    let end = max;
    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (check(mid, nums, threshold)) {
            end = mid;
        } else {
            start = mid;
        }
    }
    
    if (check(start, nums, threshold)) {
        return start;
    }
    return end;
};

let check = (div, nums, threshold) => {
    let result = 0;
    nums.forEach(num => result += (Math.ceil(num / div)));
    return result <= threshold;
}