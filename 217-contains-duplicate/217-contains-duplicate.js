/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = new Set(nums);
    let test = Object.values(set);
    console.log(set.size)
    if (set.size < nums.length) return true;
    return false;
};