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
var levelOrder = function (root) {
    if(!root) return [];
   let result = [];
   let queue = [root];

   while (queue.length) {
      let temp = [];
      let length = queue.length;
      for (let i = 0; i < length; i++) {
        let current = queue.shift();
          if(current){
              temp.push(current.val);
          
         
         if (current.left) {
            queue.push(current.left);
         }
         if (current.right) {
            queue.push(current.right);
         }
          }
      }
       result.push(temp);
      
   }
   return result;
};