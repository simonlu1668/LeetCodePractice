/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryNumber = n.toString(2);
    let num = 0;
    for(const digit of binaryNumber){
        if(digit == 1) num++;
    }
    
    return num;
};