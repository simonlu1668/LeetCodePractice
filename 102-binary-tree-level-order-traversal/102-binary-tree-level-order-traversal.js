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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    if(!root) return result;
    let queue = [root];
    
    const innerFunction = (node) => {

        while(queue.length > 0) {
               let temp = [], queueLength = queue.length;
            for(let i = 0; i < queueLength; i++) {
                let current = queue.shift();
                temp.push(current.val);
                if(current.left) queue.push(current.left);
                if(current.right) queue.push(current.right); 
            }
            result.push(temp);
        }
    }
    
    
    innerFunction(root);
    return result;
}