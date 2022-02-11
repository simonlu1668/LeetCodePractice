/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let hashMap = {};
    
    const innerFunction = (slate, currentTarget) => {
        if(currentTarget === 0){
            if(hashMap[slate.sort((a,b)=>a-b)]){
                return;
            }
            hashMap[slate.sort((a,b)=>a-b)] = 1;
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