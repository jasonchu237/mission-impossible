/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if (A.length < 3) {
        return false;
    }
    
    let i = 0;
    while (i < A.length && i + 1 < A.length && A[i] < A[i + 1]) {
        i++;
    }
    
    if (i === 0 || i + 1 >= A.length) {
        return false;
    }
    
    while (i < A.length && i + 1 < A.length) {
        if (A[i] <= A[i + 1]) {
            return false;
        }
        i++;
    }
    
    return true;
};