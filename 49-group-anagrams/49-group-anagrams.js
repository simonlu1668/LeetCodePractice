/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
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