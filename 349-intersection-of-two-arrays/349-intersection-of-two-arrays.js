/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hashTable = {};
    
    
    if(nums1.length > nums2.length) {
        for(let i = 0; i < nums1.length; i++) {
        if(!hashTable[nums1[i]]) {
            hashTable[nums1[i]] = 1;
        }
    }
    
    for(let i = 0; i < nums1.length; i++) {
        if(hashTable[nums2[i]]) {
            hashTable[nums2[i]]++;
        }
    } 
    } else {
         for(let i = 0; i < nums1.length; i++) {
        if(!hashTable[nums1[i]]) {
            hashTable[nums1[i]] = 1;
        }
    }
    
    for(let i = 0; i < nums2.length; i++) {
        if(hashTable[nums2[i]]) {
            hashTable[nums2[i]]++;
        }
    }
    }
    
   
    
    let result = [];
    
    for(const key in hashTable) {
        if(hashTable[key] > 1) {
            result.push(key);
        }
    }
    return result;
};