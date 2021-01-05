function twoNumberSum(array, targetSum) {
    // Write your code here.
    let map = new Map();
    for (let num of array) {
        if (map.has(targetSum - num)) {
            return [num, targetSum - num];
        } else {
            map.set(num, true);
        }
    }
    return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
