function twoNumberSum(array, targetSum) {
    // Write your code here.
    array.sort((a, b) => a - b);
    let i = 0,
        j = array.length - 1;
    while (i < j) {
        if (array[i] + array[j] === targetSum) {
            return [array[i], array[j]];
        } else if (array[i] + array[j] > targetSum) {
            j--;
        } else {
            i++;
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
