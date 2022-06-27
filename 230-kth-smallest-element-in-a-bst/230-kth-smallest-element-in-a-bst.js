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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(!root) return null;
    let result = [];
    
    const inner = (currentNode) => {
        if(!currentNode) return;
        if(result.length == k) return currentNode.val;
        inner(currentNode.left);
        result.push(currentNode.val);
        inner(currentNode.right);
        
    }
    inner(root);
    return result[k-1];
};