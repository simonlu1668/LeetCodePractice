/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    //step one break the array into smallest form
    let midPoint = Math.floor(nums.length/2);
    const innerFunction = (currentArray) => {
        if(currentArray.length === 1) return currentArray;
        let temp = [];
        let midPoint = Math.floor(currentArray.length/2);
        let leftHalf = innerFunction(currentArray.slice(0,midPoint));
        let rightHalf = innerFunction(currentArray.slice(midPoint));
        
        let left = 0, right = 0;
        while(left < leftHalf.length && right < rightHalf.length){
            if(leftHalf[left] < rightHalf[right]){
                temp.push(leftHalf[left]);
                left++;
            } else {
                temp.push(rightHalf[right]);
                right++;
            }
        }
        
        while(left < leftHalf.length){
            temp.push(leftHalf[left]);
            left++;
        }
        
        while(right < rightHalf.length){
            temp.push(rightHalf[right]);
            right++;
        }
        return temp;
    }
    
    return innerFunction(nums);
    
    
};