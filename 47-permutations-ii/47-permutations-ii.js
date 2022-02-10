/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let hashTable = {};
    
    const innerFunction = (slate, bag) => {
      
        if(bag.length == 0 && !hashTable[slate]){
            hashTable[slate] = 1;
            result.push(slate);
            return;
        } 
        
        for(let i = 0; i < bag.length; i++) {
            innerFunction(slate.concat(bag[i]), bag.slice(0,i).concat(bag.slice(i+1)));
        }
    }
    
    
    for(let i = 0; i < nums.length; i++){
        innerFunction([nums[i]], nums.slice(0,i).concat(nums.slice(i+1)));
    }
    
    return result;
};