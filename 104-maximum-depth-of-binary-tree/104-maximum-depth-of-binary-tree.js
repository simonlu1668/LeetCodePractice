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
    let result = 0;
    
    const innerFunction = (node, currentDepth) => {
        if(node){
            result = Math.max(currentDepth, result);
            innerFunction(node.left, currentDepth+1);
            innerFunction(node.right, currentDepth+1);
        }
    }
    
    
    innerFunction(root, 1)
    
    return result;
};