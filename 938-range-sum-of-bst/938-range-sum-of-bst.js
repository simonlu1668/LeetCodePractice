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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    let sum = 0;
    if(!root) return sum;
    
    const innerFunction = (node) => {
        if(node){
            if(node.val >= low && node.val <= high) sum+=node.val;
        innerFunction(node.left);
        innerFunction(node.right); 
        }
       
    }
    
    
    innerFunction(root);
    
    return sum;
};