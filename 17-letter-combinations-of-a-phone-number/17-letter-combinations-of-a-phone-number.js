/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let results = [];
    if(digits.length === 0) {
        return results;
    }
    let hashObject = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    
    const innerFunction = (slate, index, length) => {
        if(length === 0) {
            results.push(slate);
        } else {
            let letters = digits[index];
            for(let j = 0; j < hashObject[letters].length; j++) {
                innerFunction(slate + hashObject[letters][j], index+1, length-1);
            }   
        }
    }
    
    let firstLetters = hashObject[digits[0]]; 
    for(let i = 0; i < firstLetters.length; i++) {
        innerFunction(firstLetters[i], 1, digits.length-1);
    }
    
    return results;
};