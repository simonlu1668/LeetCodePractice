/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    while(left < right) {
        let complement = target - numbers[left];
        
        if(complement < numbers[right]) {
            right--;
        } else if (complement > numbers[right]) {
            left++;
        } else {
            return [left+1, right+1];
        }
    }
};