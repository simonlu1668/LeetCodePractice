
 var missingNumber = function(nums) {
    var sortedArray = nums.sort((a,b) => a-b);
    
    for(var i = 0; i < sortedArray.length+1; i++) {
        if(sortedArray[i] !== i) {
            return i;
        }
    }
};
