/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let results = [];
    
    const innerFunction = (currentArray) => {
      if(currentArray.length === nums.length){
          results.push(currentArray);
          return;
      }
        
        for(let element of nums){
            if(!currentArray.includes(element)) {
                innerFunction(currentArray.concat(element));
            }
        }
    }
    
    for(let i = 0; i < nums.length; i++) {
           innerFunction([nums[i]]);
    }
 
    
    return results;
};