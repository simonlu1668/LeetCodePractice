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
    let result = [];
    const innerFunction = (currentNode) => {
        if(!currentNode) return;
        if(currentNode.val == val){
            result = currentNode;
            return;
        }
        if(!currentNode.left && !currentNode.right) {
            return;
        }
        
        if(currentNode.val < val){
            innerFunction(currentNode.right);
        }
        
        if(currentNode.val > val){
            innerFunction(currentNode.left);
        }
    }
    
     innerFunction(root);
    
    if(result.length == 0) return null;
    return result;
 
};