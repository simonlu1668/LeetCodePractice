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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0;
   let maxDepth = Infinity;
    
    const innerFunction = (node, currentDepth) => {
        if(!node){
             maxDepth = Math.min(currentDepth, maxDepth);
            return;
        }
        if(!node.left && !node.right){
            maxDepth = Math.min(currentDepth, maxDepth);
            return;
        }
        if(node.left){
               innerFunction(node.left, currentDepth+1);
   
        }
        
        if(node.right){
              innerFunction(node.right, currentDepth+1);
        }
        
   
    }
    
    
    innerFunction(root, 1);
    
    return maxDepth;
};