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
 * @return {number[]}
 */
var findMode = function(root) {
    let hashtable = {};
    let result = [];
    
    
    const innerFunction = (node) => {
        if(!node){
            return;
        }
        
        if(hashtable[node.val]){
            hashtable[node.val]++;
        } else {
            hashtable[node.val] = 1;
        }
        
        innerFunction(node.left);
        innerFunction(node.right);
    }
    
    innerFunction(root);
    
    let largestValue = Object.values(hashtable).sort((a,b)=> b-a)[0];
    for(let key in hashtable){
        if(hashtable[key] === largestValue) {
            result.push(key);
        }
    }
    return result;
};