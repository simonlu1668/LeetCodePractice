/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var result = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '}' || s[i] === ']' || s[i] === ')') {
            var poppedOff = result.pop();
            if (poppedOff + s[i] === '{}' || poppedOff + s[i] === '[]' || poppedOff + s[i] === '()') {
                continue;
            } else {
                return false;
            }
        } else {
            result.push(s[i]);
        }
    }
    return result.length === 0;
};