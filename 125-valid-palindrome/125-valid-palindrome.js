/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 1) return true;
    let result = [];
    let numbers = {
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 1,
        '5': 1,
        '6': 1,
        '7': 1,
        '8': 1,
        '9': 1,
        '0': 1
    }
    
    let arrayS = s.split('');
    for(let i = 0; i < arrayS.length; i++){
        if(arrayS[i].toUpperCase() !== arrayS[i].toLowerCase()){
            result.push(arrayS[i].toLowerCase());
        }
        if(numbers[arrayS[i]]) result.push(arrayS[i]);
    }
    console.log(result.join(''), result.reverse().join(''));
    return result.join('') === result.reverse().join('');
};