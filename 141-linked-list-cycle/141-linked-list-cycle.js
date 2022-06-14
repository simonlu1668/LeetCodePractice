/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let fast = head;
    
    while(fast.next && head.next){
        head = head.next;
        fast = fast.next.next;
        if(head === fast) return true;
        if(fast === null) return false;
    }
    
    return false;
};