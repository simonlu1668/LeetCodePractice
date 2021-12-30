/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //[1,1,1,3,5]
    // l     r r  
    
    let left = 0;
    let right = left+1;
    let answer = 0;
    while(right <= nums.length) {
        if(nums[left] !== nums[right]) {
            let temp = nums[left+1];
            nums[left+1] = nums[right];
            nums[right] = temp;
            left++;
            answer++;
        }
        right++;
    } 
    return answer;
    return nums;
};