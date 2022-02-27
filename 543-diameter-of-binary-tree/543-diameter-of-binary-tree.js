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
    let diameter = 0;
    const innerFunction = (node) => {
        let myDiameter = 0, leftHalf = 0, rightHalf = 0;
        if(!node.left && !node.right) {
            return 0;
        }
    
        if(node.left) {
             leftHalf = innerFunction(node.left);
            myDiameter += leftHalf+1; // 1 // 2 returns up a 2
        }
        if(node.right) {
             rightHalf = innerFunction(node.right);
            myDiameter += rightHalf+1; // 1
        }
        diameter = Math.max(diameter, myDiameter);
        return Math.max(leftHalf, rightHalf) + 1;
    }
    
    innerFunction(root);
    
    return diameter;
};