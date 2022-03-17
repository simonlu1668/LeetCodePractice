/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let hash = {};
    
    const innerFunction = (newTarget = target, current = []) => {
        if(newTarget < 0) return;
        if(newTarget == 0){
            let sorted = current.sort((a,b)=>a-b);
            if(!hash[sorted]){
                     result.push(current);
                hash[sorted] = 1;
            }
       
        }
        
        for(let i = 0; i < candidates.length; i++){
            innerFunction(newTarget-candidates[i], current.concat(candidates[i]));
        }
    }
    
    
    innerFunction();

    
    return result;
};