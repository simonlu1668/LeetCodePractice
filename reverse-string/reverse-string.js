/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    const innerFunction = (left, right) => {
        if(left >= right) return;
        let temp = s[right];
        s[right] = s[left];
        s[left] = temp;
        innerFunction(left+1, right-1);
    }
    innerFunction(0, s.length-1);
    return s;
};