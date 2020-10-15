/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] === s[end]) {
            start++;
            end--;
        } else {
            return helper(s, start + 1, end) || helper(s, start, end - 1);
        }
    }
    
    return true;
};

let helper = (s, i, j) => {
    let start = i;
    let end = j;
    while (start < end) {
        if (s[start] === s[end]) {
            start++;
            end--;
        } else {
            return false;   
        }
    }
    
    return true;
}