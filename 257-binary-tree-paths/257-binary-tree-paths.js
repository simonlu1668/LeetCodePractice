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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    
    
    const innerFunction = (node, current = '') => {
        if(node){
             if(!node.left && !node.right){
            result.push(current+node.val);
            return;
        } else {
            innerFunction(node.left, current + node.val + '->');
            innerFunction(node.right, current + node.val + '->');
        }
        }
       
    }
    
    innerFunction(root);
    return result;
};