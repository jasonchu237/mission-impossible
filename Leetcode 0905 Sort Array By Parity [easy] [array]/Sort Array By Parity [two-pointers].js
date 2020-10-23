/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let i = 0;
    let j = A.length - 1;
    while (i < j) {
        if (A[i] % 2 > A[j] % 2) {
            let temp = A[j];
            A[j] = A[i];
            A[i] = temp;
            i++;
            j--;
        }
        
        if (A[i] % 2 === 0) {
            i++;
        }
        
        if (A[j] % 2 === 1) {
            j--;
        }
    }
    
    return A;
};