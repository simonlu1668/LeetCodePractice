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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    var hasValue = null;
    innerFunction = (currentNode) => {
        if(currentNode) {
            if(currentNode.val === val) {
                hasValue = currentNode;
            }
            
            if(!currentNode.left && !currentNode.right) {
                return;
            }
            
             innerFunction(currentNode.left);
        innerFunction(currentNode.right);
        }
       
      
    }
    
    innerFunction(root);
    
    return hasValue;
};