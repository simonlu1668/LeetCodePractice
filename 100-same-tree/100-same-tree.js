/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    let isSame = true;
    const innerFunction = (currentP, currentQ) => {
        if(!currentP){
             if(currentQ) {
            isSame = false;
             }
            return;
        }
    
    if(!currentQ){
             if(currentP) {
            isSame = false;
             }
            return;
        }
        if(currentP.val !== currentQ.val) {
            isSame = false;
            return;
        }
        
        innerFunction(currentP.left, currentQ.left);
        innerFunction(currentP.right, currentQ.right);
        
        
        
    }
    
    innerFunction(p,q);
    
    return isSame;
};