/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    if (k < 0) {
        return 0;
    }
    
    let res = 0;
    let map = new Map();
    for (let n of nums) {
        map.set(n, map.get(n) + 1 || 1);
    }
    
    for (let n of map.keys()) {
        if (k == 0) {
            if (map.get(n) >= 2) {
                res++;
            }
        }
        
        if (k > 0) {
            if (map.has(n + k)) {
                res++;
            }
        }
    }
    
    return res;
};