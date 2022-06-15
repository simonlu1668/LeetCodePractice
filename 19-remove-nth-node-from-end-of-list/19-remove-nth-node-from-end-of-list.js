/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head) return null;

    let slow = head;
    let fast = head;
    let i = 1;
    while(i<=n){
        fast = fast.next;
        i++;
    }
        if (!fast) return head.next
    while(fast.next){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    return head;
};

const helper = (list) => {
    let count = 1;
    while(list.next){
        count++;
        list = list.next;
    }
    return count;
}