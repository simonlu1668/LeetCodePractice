/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [];
    
    const innerFunction = (slate, size) => {
        if(size == 0) {
            results.push(slate);
        } else {
            for(let num of nums) {
                if(!slate.includes(num)) {
                    innerFunction(slate.concat(num), size-1);
                }
            }
        }
    }
    
    
    for(let i = 0; i < nums.length; i++){
        innerFunction([nums[i]], nums.length-1);
    }
    
    return results;
};