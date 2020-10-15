/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        // Remember to add start < end, (input = ",.")
        while (!isValid(s[start]) && start < end) {
            start++;
        }
        
        while (!isValid(s[end]) && start < end) {
            end--;
        }
        
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        } else {
            start++;
            end--;
        }
    }
    
    return true;
    
};

let isValid = (ch) => {
    let regExp = /[a-zA-Z0-9]/;
    if (regExp.test(ch)) {
        return true;
    }
    return false;
}