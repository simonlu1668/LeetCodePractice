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
var postorderTraversal = function(root) {
    let result = [];
    
    const innerFunction = (node) => {
        if(node) {
            innerFunction(node.left);
            innerFunction(node.right);
            result.push(node.val);
        }
    }
    
    innerFunction(root);
    return result;
};