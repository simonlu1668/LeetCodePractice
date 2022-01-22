/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n, product = 1) {
    if(product === n) {
        return true;
    } else if (product > n) {
        return false;
    } else {
        return isPowerOfFour(n, product*4);
    }
    
    return isPowerOfFour(n,1);
};