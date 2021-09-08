/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n === 0) {
        return 0;
    }
    
    var innerFunction = (n, memo = {}) => {
        
        if(n in memo) return memo[n];
        
        if(n <= 2) {
            return 1;
        }
        
        memo[n] = innerFunction(n-1) + innerFunction(n-2);
        return memo[n];
        
    }
    
    
    var test = innerFunction(n);
    return test;
};