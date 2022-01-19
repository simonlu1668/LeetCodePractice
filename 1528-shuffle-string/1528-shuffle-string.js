/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let resultArray = [];
    
    for(let i = 0; i < indices.length; i++) {
        resultArray[indices[i]] = s[i];
    }
    
    return resultArray.join('');
};