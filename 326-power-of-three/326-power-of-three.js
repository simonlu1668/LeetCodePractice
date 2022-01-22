/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n, product=1) {
    if(product > n) {
        return false;
    } else if (product === n) {
        return true;
    } else {
        return isPowerOfThree(n, product*3);
    }
    
    return isPowerOfThree(n,1);
};