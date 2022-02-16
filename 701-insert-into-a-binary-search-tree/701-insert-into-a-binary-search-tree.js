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
var insertIntoBST = function(root, val) {
    if(!root) {
        return new TreeNode(val);
    } else {
        let current = root;
        while (current) {
            if(current.val < val) {
                if(!current.right) {
                    current.right = new TreeNode(val);
                    break;
                }
                current = current.right;
            } else {
                if(!current.left) {
                    current.left = new TreeNode(val);
                    break;
                }
                current = current.left;
            }
        }
    }
    return root;
};