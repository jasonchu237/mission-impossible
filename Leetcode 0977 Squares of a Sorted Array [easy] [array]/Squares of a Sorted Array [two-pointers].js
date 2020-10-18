/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let result = [];
    let start = 0;
    let end = A.length - 1;
    let cur = end;
    while (start <= end) {
        if (A[start] * A[start] >= A[end] * A[end]) {
            result[cur--] = A[start] * A[start];
            start++;
        } else {
            result[cur--] = A[end] * A[end];
            end--;
        }
    }
    
    return result;
};