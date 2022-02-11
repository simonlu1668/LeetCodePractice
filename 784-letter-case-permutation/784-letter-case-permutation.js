/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    let result = [];
    
    const helper = (slate, index) => {
      if(slate.length === s.length){
          result.push(slate);
      } else {
            if(s[index].toLowerCase() !== s[index].toUpperCase()){
                  helper(slate+s[index].toLowerCase(), index+1);
                  helper(slate+s[index].toUpperCase(), index+1);
          } else {
            helper(slate+s[index], index+1);
          }
      }
    }
    
    
    helper('', 0)
    
    return result;
};