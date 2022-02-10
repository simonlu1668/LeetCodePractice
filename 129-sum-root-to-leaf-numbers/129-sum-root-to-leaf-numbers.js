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
var sumNumbers = function(root) {
    let sum = 0;
    
    const innerFunction = (node, current) => {
        if(node){
            innerFunction(node.left, current + node.val.toString())
            innerFunction(node.right, current + node.val.toString());
        if(!node.left && !node.right){
            sum+= Number(current+node.val.toString());
            }
        }
    
    }
    
    innerFunction(root, '');
    
    return sum;
};