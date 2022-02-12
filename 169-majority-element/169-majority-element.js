/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashmap={};
    let max = 0;
    let maxValue = 0;
    for(let ele of nums){
        hashmap[ele] === undefined ? hashmap[ele] = 1 : hashmap[ele]++;
    }
    
    for(key in hashmap){
        if(maxValue < hashmap[key]) {
            maxValue= hashmap[key];
            max = key;
        }
    }
    return max;
};