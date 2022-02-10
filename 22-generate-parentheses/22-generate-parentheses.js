/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    let total = n*2;
    const innerFunction = (slate, current) => {
        if(current === 0){
            result.push(slate);
            return;
        } else {
            innerFunction(slate+')', current-1);
            innerFunction(slate+'(', current-1);
        }
    }
    
    for(let i = 0; i < total; i++) {
     innerFunction('(', total-1);   
    }
    
    return helper(result);
};

var helper = (parens) => {
    let helperResult = [];
    let helperResult2 = [];
    let stack = [];
    
    for(let i = 0; i < parens.length; i++){
        let balance = 0;
        for(let j = 0; j < parens[i].length; j++) {
         if(parens[i][j] == '(') balance++;
        else balance--;
            if(balance<0) break;
        }
        if(balance==0) helperResult.push(parens[i]);
    }
    for(let i = 0; i < helperResult.length; i++){
        let stack = [];
        for(let j = 0; j < helperResult[i].length; j++){
            if(helperResult[i][j] === '('){
                stack.push(helperResult[i][j]);
            } else if (helperResult[i][j] === ')'){
                stack.pop();
            }
            if(stack.length === 0){
            helperResult2.push(helperResult[i]);      
            }
        }
    }
   return Array.from(new Set(helperResult2));
}