 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let count = 0;
    for (let num of arr) {
        if (num === 0) {
            count++;
        }
    }
    
    let i = arr.length - 1;
    let j = arr.length - 1 + count;
    while (i !== j) {
        if (j < arr.length) {
            arr[j] = arr[i];
        }
        j--;
        if (arr[i] === 0) {
            if (j < arr.length) {
                arr[j] = arr[i];
            }
            j--
        }
        i--;
    }
};