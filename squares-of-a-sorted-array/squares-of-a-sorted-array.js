/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    var result = [];

    
    for(var i = 0; i < nums.length; i++) {
        result.push(nums[i]**2);
    }
    
    return result.sort((a,b) => a-b);
};