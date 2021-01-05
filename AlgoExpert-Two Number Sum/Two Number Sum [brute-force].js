function twoNumberSum(array, targetSum) {
    // Write your code here.
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                result[0] = array[i];
                result[1] = array[j];
                return result;
            }
        }
    }
    return result;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
