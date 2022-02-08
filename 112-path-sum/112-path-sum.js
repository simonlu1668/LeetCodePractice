/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    let result = false;
    
    const innerFunction = (node, currentSum) => {
        if(node){
            currentSum+= node.val;
            if(!node.left && !node.right){
                console.log(currentSum);
                if(currentSum === targetSum) {
                    result = true;
                    return;
                }
            }
               innerFunction(node.left, currentSum);
            innerFunction(node.right, currentSum);
        }
    
         
        
    }
    
    innerFunction(root, 0);
    
    return result;
};