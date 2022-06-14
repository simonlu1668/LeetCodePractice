/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    if(s.length == 0) return "";
    let stack = [[]];
   
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(') {
            stack.push([]);
        } else if (s[i] === ')'){
            let current = stack.pop().reverse();
            stack[stack.length-1].push(...current);
        } else {
            stack[stack.length-1].push(s[i]);
        }
    }
    
    return stack[0].join('');
};