/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    var richest = 0;
    for(var i = 0; i < accounts.length; i++) {
        if(findSum(accounts[i]) > richest) {
            richest = findSum(accounts[i]);
        }
    }
    
    return richest;
};



function findSum (array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++){
        sum+=array[i];
    }
    
    return sum;
}