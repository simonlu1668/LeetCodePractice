/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let left = 0;
    let right = nums.length-1;
    
    while(left <= right){
        let midPoint = Math.floor((left+right)/2);
        if(nums[midPoint] === target) return midPoint;
        if(nums[midPoint] < target){
            left = midPoint + 1;
        } else {
           right = midPoint - 1;
        }
    }
    
    return -1;
};