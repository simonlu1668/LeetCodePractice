/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const innerFunction = (slate, currentTarget) => {
        if(currentTarget === 0){
            if(JSON.stringify(result).includes(JSON.stringify(slate.sort((a,b)=>a-b)))){
                return;
            }
            result.push(slate.sort((a,b)=> a-b));
            return;
        }
        
        if(currentTarget < 0) {
            return;
        }
        
        for(let candidate of candidates){
            innerFunction(slate.concat(candidate), currentTarget-candidate);
        }
    };
    
    for(let candidate of candidates){
        innerFunction([candidate], target-candidate);
    }
    
    return result;
};