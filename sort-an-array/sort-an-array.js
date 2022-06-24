/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //step one break the array into smallest form
    let midPoint = Math.floor(nums.length/2);
    const innerFunction = (currentArray) => {
        if(currentArray.length === 1) return currentArray;
        let midPoint = Math.floor(currentArray.length/2);
        let leftHalf = innerFunction(currentArray.slice(0,midPoint));
        let rightHalf = innerFunction(currentArray.slice(midPoint));
        
        return leftHalf.concat(rightHalf).sort((a,b)=> a-b);
    }
    
    return innerFunction(nums);
    
    
};