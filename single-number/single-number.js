/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hashTable = {};
    
    
    for(var i = 0; i < nums.length; i++) {
        if(!hashTable[nums[i]]) {
            hashTable[nums[i]] = 1;
        } else {
            hashTable[nums[i]]++;
        }
    }
    
    
    for(var key in hashTable){
        if(hashTable[key] === 1) {
            return key;
        }
    }
};