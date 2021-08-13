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
var maxDepth = function(root) {
    var depth = 0;
    
    
    innerFunction = (currentNode, currentDepth) => {
        if(currentNode) {
            if(!currentNode.left && !currentNode.right) {
                currentDepth++;
                if(currentDepth > depth) {
                    depth = currentDepth;
                }
                return;
            } 
            
             innerFunction(currentNode.left, currentDepth + 1);
        innerFunction(currentNode.right, currentDepth + 1);
        }
        
       
    }
    
    
    innerFunction(root, 0);
    
    
    
    
    
    return depth;
};