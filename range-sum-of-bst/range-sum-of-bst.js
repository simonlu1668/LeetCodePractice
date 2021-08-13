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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    var values = [];
    
    calculateSum = (currentNode, currentSum) => {
        if(currentNode) {
            if(!currentNode.left && !currentNode.right) {
                values.push(currentNode.val);
                return;
            } else {
                values.push(currentNode.val);
                calculateSum(currentNode.left, currentSum);
                calculateSum(currentNode.right, currentSum);
            }
        }
        
    }
    
    calculateSum(root, 0);
    
    var sum = 0;
    for(var i = 0; i < values.length; i++) {
        if(values[i] >= low && values[i] <= high) {
            sum+=values[i];
        }
    }
    
    return sum;
};