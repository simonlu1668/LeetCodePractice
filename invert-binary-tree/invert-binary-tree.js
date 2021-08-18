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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    function innerFunction (node) {
        if(node) {
            if(node.left === null && node.right === null) {
                return;
            }
            var temp = node.left;
            node.left = node.right;
            node.right = temp;
            
            innerFunction(node.left);
            innerFunction(node.right);
        }
    }
    
    
    
    innerFunction(root);
    
    return root;
};