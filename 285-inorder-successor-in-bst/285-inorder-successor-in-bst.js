/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(!root) {
        return null;
    }
    
    let current = p;
    if(p.right){
        current = p.right;
        while(current.left) {
            current = current.left;
        }
        return current;
    } else {
        let prev = null;
        let current = root;
        while(current.val !== p.val) {
            if(current.val < p.val){
                current = current.right;
            } else {
                prev = current;
                current = current.left;
            }
        }
       return prev; 
    }
    
};