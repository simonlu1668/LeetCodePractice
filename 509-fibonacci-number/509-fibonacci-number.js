/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let sum = 0;
    const innerFunction = (current) => {
        if(current === 0) return 0;
        if(current === 1) return 1;
        
        return innerFunction(current-1) + innerFunction(current-2);
    }
    
    return innerFunction(n);
    
    return sum;
    
};