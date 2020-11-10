/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    if (s === null || s.length === 0) {
        return result;
    }
    
    let part = [];
    dfs(s, result, part, 0);
    return result;
};

let dfs = (s, result, part, start) => {
    let size = s.length;
    if (start === size) {
        result.push(part.slice(0));
        return;
    }
    
    for (let i = start; i < size; i++) {
        if (isPalindrome(s, start, i)) {
            part.push(s.substring(start, i + 1));
            dfs(s, result, part, i + 1);
            part.pop();
        }
    }
}

let isPalindrome = (s, start, end) => {
    for (let i = start, j = end; i <= j; i++, j--) {
        if (s.charAt(i) != s.charAt(j)) {
            return false;
        }
    } 
    return true;
}