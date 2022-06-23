/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let result = "";
    let stack = [[]];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push([]);
        } else if (s[i] === ')'){
            let end = stack.pop();
            end = end.reverse();
            stack[stack.length-1].push(...end);
        } else {
            stack[stack.length-1].push(s[i]);
        }
    }
    
    
    return stack[0].join('');
};