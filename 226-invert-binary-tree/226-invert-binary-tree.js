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
    if(!root) return root;
    const innerFunction = (node) => {
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if(node.left){
            innerFunction(node.left);
        }
        if(node.right){
            innerFunction(node.right);
        }
    }
    
    innerFunction(root);
    
    return root;
};