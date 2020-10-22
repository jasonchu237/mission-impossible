/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    let set = new Set();
    for (let num of arr) {
        if (set.has(num * 2)) {
            return true;
        }
        
        if (num % 2 === 0 && set.has(Math.floor(num / 2))) {
            return true;
        }
        
        set.add(num);
    }
    
    return false;
};