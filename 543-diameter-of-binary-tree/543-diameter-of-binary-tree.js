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
    let longest = 0;
    
    const innerFunction = (node) => {
        let currentLength = 0, leftLength = 0, rightLength = 0;
        if(!node.left && !node.right) {
            return 0;
        }
        
        if(node.left){
            leftLength = innerFunction(node.left);
            currentLength += leftLength + 1;
        }
        
        if(node.right) {
            rightLength = innerFunction(node.right);
        
            currentLength += rightLength + 1;
        }
        longest = Math.max(currentLength, longest);
        return Math.max(leftLength, rightLength) + 1;
    }
    
    innerFunction(root);
    return longest;
};