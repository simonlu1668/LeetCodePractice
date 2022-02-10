/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let hashTable = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(!hashTable[nums[i]]) hashTable[nums[i]] = 1
    else hashTable[nums[i]]++
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(hashTable[0] === 0) delete hashTable[0];
        if(hashTable[1] === 0) delete hashTable[1];
        if(hashTable[0]) {
            nums[i] = 0;
            hashTable[0]--;
        } else if (hashTable[1]){
            nums[i] = 1;
            hashTable[1]--;
        } else {
            nums[i] = 2;
        }

    }
    
    console.log(hashTable);
};