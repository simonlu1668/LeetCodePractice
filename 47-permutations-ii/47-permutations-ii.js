/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let result = [];
    let hashmap = {};
    
    const innerFunction = (slate = [], bag = nums) => {
        if(bag.length == 0) {
            if(!hashmap[slate]) {
                hashmap[slate] = 1;
                   result.push(slate);
            }
         
        } else {
            for(let i = 0; i < bag.length; i++) {
                innerFunction(slate.concat(bag[i]), bag.slice(0,i).concat(bag.slice(i+1)));
            }
        }
    }
    
    
    innerFunction();
    
    return result;
};