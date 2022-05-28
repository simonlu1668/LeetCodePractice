/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let sum = 0;
    let cache = {};
    
    const innerFunction = (number) =>{
        if(cache[number]) return cache[number];
        if(number == 0) return 0;
        if(number == 1) return 1;
        
        let result =  innerFunction(number-1) + innerFunction(number-2);
        cache[number] = result;
        return result;
    }
    
    
   return innerFunction(n);
    
    return sum;
};