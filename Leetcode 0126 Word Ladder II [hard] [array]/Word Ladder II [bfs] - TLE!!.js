/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let queue = [];
    
    let dic = new Set();
    for (let word of wordList) {
        dic.add(word);
    }
    
    let path = [];
    path.push(beginWord);
    queue.push(path);
    
    let result = [];
    
    while (queue.length !== 0) {
        if (result.length !== 0) {
            return result;
        }
        
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let curList = queue.shift();
            let curWord = curList[curList.length - 1];
            dic.delete(curWord);
            
            if (curWord === endWord) {
                result.push(curList.slice(0));
            } else {
                let tempStr = curWord.slice(0);
                for (let j = 0; j < curWord.length; j++) {
                    for(let ch of "abcdefghijklmnopqrstuvwxyz") {
                        let tempStrArr = tempStr.split('');
                        tempStrArr[j] = ch;
                        tempStr = tempStrArr.join('');
                                            
                        if (dic.has(tempStr)) {
                            curList.push(tempStr);
                            queue.push(curList.slice(0));
                            curList.pop();
                        }
                    }
                    let tempStrArr = tempStr.split('');
                    tempStrArr[j] = curWord[j];
                    tempStr = tempStrArr.join('');
                }
            }
        }
    }
    
    return result;
};