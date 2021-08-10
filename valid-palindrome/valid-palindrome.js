/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    
     let lowerCaseString = s.toLowerCase();
    let resultString = '';
    for(let i = 0; i < lowerCaseString.length; i++) {
        if(lowerCaseString.charCodeAt(i) >= 97 && lowerCaseString.charCodeAt(i) <= 122 ){
            resultString+=lowerCaseString[i];
        }

        if(lowerCaseString.charCodeAt(i) >= 48 && lowerCaseString.charCodeAt(i) <= 57 ){
            resultString+=lowerCaseString[i];
        }
    }

    return resultString === resultString.split('').reverse().join('');
};