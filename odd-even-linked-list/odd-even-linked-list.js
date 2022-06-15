/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head) return null;
    let currentOdd = head;
    let headEven = head.next;
    let currentEven = head.next;
    
    while(currentOdd && currentEven){
        currentOdd.next = currentEven.next;
        if(currentOdd.next){
                    currentOdd = currentOdd.next;
        }

        currentEven.next = currentOdd.next;
        currentEven = currentEven.next;
    }
    
    currentOdd.next = headEven;
    
    return head;
};