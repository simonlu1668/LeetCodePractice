/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let hashmap = {
        '}' : '{',
        ']' : '[',
        ')' : '(',
    };
    
    for(let letter of s){
        if(!hashmap[letter]){
            stack.push(letter);
        } else {
            if(hashmap[letter] !== stack.pop()){
                return false;
            }
        }
    }
    
    return stack.length === 0;
};