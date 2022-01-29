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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let current = root;
    let result = [];
    
   const innerFunction = (node) => {
       if(node) {
                   innerFunction(node.left);
           result.push(node.val);
    
       innerFunction(node.right);
       }
       
      
   }
   
   innerFunction(root);
    return result;
};