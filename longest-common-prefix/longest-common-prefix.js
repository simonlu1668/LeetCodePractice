/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs.length === 1) {
        return strs[0];
    }
    let sortedArray = strs.sort((a,b)=> a.length-b.length);
    let resultString = '';
    
    for(let i = 0; i < sortedArray[0].length; i++) {
        for(let j = 1; j < sortedArray.length; j++) {
            if(sortedArray[0][i] !== sortedArray[j][i]) {
                console.log(resultString);
                return resultString;
            } else if (sortedArray[0][i] === sortedArray[j][i] && j === sortedArray.length-1) {
                resultString+=sortedArray[0][i];
            }
        }
    }

    return resultString;

};