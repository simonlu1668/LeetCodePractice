/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length <= 0) {
        return [];
    }
    let result = [];
    let hash = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz', 
    }
    
    const innerFunction = (current, index) => {
        if(current.length == digits.length){
            result.push(current);
            return;
        } else {
                   for(let i = 0; i < hash[digits[index]].length; i++) {
            innerFunction(current+hash[digits[index]][i], index+1);
        }
        
        }
 
        
    }
    
   innerFunction('', 0)
    
    return result;
};