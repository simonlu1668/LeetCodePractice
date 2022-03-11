/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    let originalLength = original.length;
    let result = [];
    for(let j = 0; j < m; j++){ 
        let temp = [];
        for(let i = 0; i < n; i++){
            temp.push(original.shift());
        }
        result.push(temp);
    }
    
    console.log(result.flat(), original.flat());
    if(result.flat().length !== originalLength)return [];
    
    return result;
};