/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n, product=1) {
    if(product === n) {
        return true;
    }
    
    else if(product > n) {
        return false;
    } else {
        return isPowerOfTwo(n,product*2);
    }
    
    return isPowerOfTwo(n, 1);


};