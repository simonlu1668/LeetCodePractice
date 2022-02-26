/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    let hashmap = {};
    
    const innerFunction = (slate, current) => { 

        if(current === 0) {
            if(!hashmap[slate.sort((a,b)=>a-b)]) {
                 result.push(slate);
                hashmap[slate.sort((a,b)=>a-b)]=1;
            }
           
            return;
        }
        
        if(current < 0) {
            return;
        }
        
        for(let candidate of candidates) {
            innerFunction(slate.concat(candidate), current-candidate);
        }
    }
    
    
    innerFunction([], target);
    
    return result;
};