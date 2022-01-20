/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function(arr1, arr2, arr3) {
    let hashMapThirdArray = {};
    let result = [];
    
    for(let i = 0; i < arr3.length; i++) {
        if(!hashMapThirdArray[arr3[i]]) {
            hashMapThirdArray[arr3[i]] = 1;
        }
    }
    
    for(let i = 0; i < arr1.length; i++) {
        let left = 0;
        while(left !== arr2.length) {
            if(arr2[left] === arr1[i] && hashMapThirdArray[arr1[i]]) {

                result.push(arr1[i]);
            }
            if(arr2[left] > arr1[i]) {
                break;
            }
            left++;
        }
    }
    return result;
}; 