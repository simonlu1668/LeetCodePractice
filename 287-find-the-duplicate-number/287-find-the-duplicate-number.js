/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
   let hashmap = {};
    
    for(const num of nums){
        if(!hashmap[num]){
            hashmap[num] = 1;
        } else {
            return num;
        }
    }
};