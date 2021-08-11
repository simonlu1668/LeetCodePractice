/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
       let stringArray = s.split(' ');
    let wordArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length !== 0) {
            wordArray.push(stringArray[i]);
        }
    }

     return wordArray[wordArray.length-1].length;
};