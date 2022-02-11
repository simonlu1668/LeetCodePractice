/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    
    const innerFunction = (slate, i) => {
        if(i === nums.length){
            result.push(slate);
            return;
        }
        
        innerFunction(slate, i+1);
        innerFunction(slate.concat(nums[i]), i+1);
    }
    
    innerFunction([], 0);
    
    return result;
};