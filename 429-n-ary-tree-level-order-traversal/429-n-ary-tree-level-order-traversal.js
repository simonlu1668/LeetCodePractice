/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    
    while(queue.length){
        let currentLength = queue.length, temp = [];
        for(let i = 0; i < currentLength; i++){
            let current = queue.shift();
            temp.push(current.val);
            if(current.children){
                for(const child of current.children){
                    queue.push(child);
                }
            }
        }
        result.push(temp);
    }
    return result;
};