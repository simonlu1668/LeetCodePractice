/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let currentValue = 0;
    
    for(let i = m; i < nums1.length; i++) {
        let current = i;
        nums1[current] = nums2[currentValue];
        while(nums1[current] < nums1[current-1]) {
            let temp = nums1[current];
            nums1[current] = nums1[current-1];
            nums1[current-1] = temp;
            current--;
        }
        currentValue++;
    }
    return nums1;
};