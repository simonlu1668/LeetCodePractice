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
    let maxDepth = 0;
    if(!root) return 0;
    
    const innerFunction = (node, currentDepth = 1) =>{
        if(!node.left && !node.right) maxDepth = Math.max(currentDepth, maxDepth);
        if(node.left) innerFunction(node.left, currentDepth+1);
        if(node.right) innerFunction(node.right, currentDepth+1);
    }
    
    innerFunction(root);
    
    return maxDepth;
};