/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let sum = 0;
    const innerFunction = (number) => {
        if(number < 2){ sum+=number;
                      } else {
                               innerFunction(number-1) + innerFunction(number-2);
                      }
        
    
    }
    innerFunction(n);
    return sum;
};