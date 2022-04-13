/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let anagrams = {};
    let currentIndex = 0;
    
    for(let i = 0; i< strs.length; i++){
        let sortedWord = strs[i].split('').sort().join('');
        if(!anagrams[sortedWord] && anagrams[sortedWord] !== 0){
            result[currentIndex] = [strs[i]];
            anagrams[sortedWord] = currentIndex;
            currentIndex++;
        } else {
            result[anagrams[sortedWord]].push(strs[i]);
        } 
    }
    
    return result;
};