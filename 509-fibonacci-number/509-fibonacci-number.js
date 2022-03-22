/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
    if(n<2) return n;
    let n1 =0
    let n2=1
    for (let i=2;i<n;i++){
        let sum=n1+n2
        n1=n2;
        n2=sum;
    }
    return n1+n2;
};