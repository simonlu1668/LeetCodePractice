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
    let min = Infinity;
    if(!root){
        return 0;
    }
    
    const innerFunction = (node, currentDepth = 1) => {
        if(!node){
            return;
        }
        if(!node.left && !node.right){
            min = Math.min(currentDepth, min);
            return;
        }
        innerFunction(node.left, currentDepth+1);
        innerFunction(node.right, currentDepth+1);
    }
    
    
    innerFunction(root);
    
    return min;
};