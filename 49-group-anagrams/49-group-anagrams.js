/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // use hashmap to store each sorted word, and the index of the result it's in
    // if it doesn't exist, add index 1?
    
    let result = [];
    let hashmap = {};
    let currentIndex = 0;
    for(let i = 0; i < strs.length; i++) {
        let sortedWord = strs[i].split('').sort().join('');
        if(!hashmap[sortedWord] && hashmap[sortedWord] !== 0){
            hashmap[sortedWord] = currentIndex;
            result[currentIndex] = [strs[i]];
            currentIndex++;
        } else {
            result[hashmap[sortedWord]].push(strs[i]);
        }
    }
    
    return result;
};