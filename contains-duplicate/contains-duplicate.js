/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var result = {};
    
    for(var i = 0; i < nums.length; i++) {
        if(result[nums[i]] === undefined) {
            result[nums[i]] = 1;
        } else {
            result[nums[i]]++;
        }
    }
    
    var occurences = Object.values(result);
    for(var i = 0; i < occurences.length; i++) {
        if(occurences[i] !== 1) {

            return true;
        }
    }
    
    return false;
};