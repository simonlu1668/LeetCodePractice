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
var diameterOfBinaryTree = function(root) {
    let result = 0;
    if(!root) return result;
    
    const innerFunction = (node) => {
        let currentDiameter = 0, leftHalf = 0, rightHalf = 0;
        if(!node.left && !node.right) return 0;
        
        if(node.left){
            leftHalf += innerFunction(node.left);
            currentDiameter += leftHalf + 1;
        }
        
        if(node.right) {
            rightHalf += innerFunction(node.right);
            currentDiameter += rightHalf + 1;
        }
        
        result = Math.max(result, currentDiameter);
        return Math.max(leftHalf, rightHalf) + 1;
    }
    
    innerFunction(root);
    return result;
};