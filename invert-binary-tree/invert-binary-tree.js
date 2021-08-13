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
    
    innerFunction = (currentNode) => {
        if(currentNode) {
            if(!currentNode.left && !currentNode.right) {
                return;
            }
            var temp = currentNode.right;
            currentNode.right = currentNode.left;
            currentNode.left = temp;
            
            innerFunction(currentNode.left);
            innerFunction(currentNode.right);
        }
    }
    
    innerFunction(root);
    return root;
};