/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let leftPointer = 0;
    let rightPointer = 1;
    let max = 0;
    
    while(rightPointer < prices.length){
        if(prices[rightPointer] < prices[leftPointer]){
            leftPointer = rightPointer;
            rightPointer = rightPointer++;
        }
        max = Math.max(prices[rightPointer]-prices[leftPointer], max);
        rightPointer++;
    }
    
    return max;
};