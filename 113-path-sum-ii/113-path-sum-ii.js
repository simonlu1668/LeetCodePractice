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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    
    const innerFunction = (node, slate = [], currentSum = targetSum) => {
        if(node){
            console.log(currentSum, node);
            if(!node.left && !node.right && currentSum - node.val === 0) {
                result.push(slate.concat(node.val));
            }
            innerFunction(node.left, slate.concat(node.val), currentSum-node.val);
            innerFunction(node.right, slate.concat(node.val), currentSum-node.val);
        }
    }
    
    innerFunction(root)
    return result;
};