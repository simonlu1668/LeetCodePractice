/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let result = [];
    
    const innerFunction = (slate = '', bag = s) => {
        if(slate.length === s.length) {
            result.push(slate);
            return;
        } else {
            if(bag[0].toLowerCase() === bag[0].toUpperCase()) {
                innerFunction(slate+bag[0], bag.slice(1));
            } else {
                innerFunction(slate+bag[0].toLowerCase(), bag.slice(1));
                innerFunction(slate+bag[0].toUpperCase(), bag.slice(1));
            }
        }
    }
    
    innerFunction();
    
    return result;
};