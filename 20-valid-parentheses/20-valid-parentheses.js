/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const chars = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    
    for (const ch of s) {
        if (ch in chars) stack.push(chars[ch]);
        else if (stack.pop() !== ch) return false;
    }
    
    return stack.length === 0;
};