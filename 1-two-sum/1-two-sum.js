/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(hashMap[complement] !== undefined) {
            return [i, hashMap[complement]];
        }
          hashMap[nums[i]] = i;
   }
};