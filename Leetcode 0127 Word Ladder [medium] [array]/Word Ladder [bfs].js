/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let dic = new Set();
    for (let str of wordList) {
        dic.add(str);
    }
    
    let queue = [];
    queue.push(beginWord);
    let level = 0;
    
    while (queue.length !== 0) {
        let size = queue.length;
        level++;
        for (let i = 0; i < size; i++) {
            let current = queue.shift();
            if (current === endWord) {
                return level;
            }
            
            let tempStr = current.slice(0);
            for (let j = 0; j < current.length; j++) {
                for(let ch of "abcdefghijklmnopqrstuvwxyz") {
                    let tempStrArr = tempStr.split('');
                    tempStrArr[j] = ch;
                    tempStr = tempStrArr.join('');
                    
                    if (dic.has(tempStr)) {
                        queue.push(tempStr);
                        dic.delete(tempStr);
                    }
                }
                let tempStrArr = tempStr.split('');
                tempStrArr[j] = current[j];
                tempStr = tempStrArr.join('');
            }
        }
    }
    
    return 0;
};