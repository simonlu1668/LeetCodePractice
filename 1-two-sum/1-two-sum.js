/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
   var hashTable = {};
    for(var i = 0; i < nums.length; i++) {
        var targetComplement = target - nums[i];
        if(targetComplement in hashTable) {
            return [hashTable[targetComplement], i]
        } else {
            hashTable[nums[i]] = i;
        }
    }
}