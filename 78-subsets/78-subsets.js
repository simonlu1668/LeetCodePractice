/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // Write your code here.
		if(nums.length === 0) {
		return [[]];
	}
	let result = [];
	const innerFunction = (currentElement, index) => {
		if(index === nums.length) {
			result.push(currentElement);
			return;
		}
			innerFunction(currentElement.concat(nums[index]), index+1);
			innerFunction(currentElement, index+1);
	}
	innerFunction([], 0);
	return result;
};