/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let result = [];
    
    const innerFunction = (currentString, formedString = '', index = 0) => {
        if(formedString.length === s.length) {
            result.push(formedString);
            return;
        }
        
        if(currentString[index].toLowerCase() != currentString[index].toUpperCase()) {
            let lowerString = currentString[index].toLowerCase();
            let upperString = currentString[index].toUpperCase();
            innerFunction(currentString, formedString+lowerString, index+1);
            innerFunction(currentString, formedString+upperString, index+1);
        } else {
            innerFunction(currentString, formedString + currentString[index], index+1);
        }
           
    }
    
    
    innerFunction(s);
    
    
    return result;
};