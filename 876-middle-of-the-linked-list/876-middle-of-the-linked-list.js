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
var middleNode = function(head) {
    let sizeOfList = 0;
    
    let fastPointer = head;
    while(fastPointer){
        sizeOfList++;
        fastPointer = fastPointer.next;
    }
    let halfList;
    if(sizeOfList === 1){
        return head;
    }
    if(sizeOfList%2 === 0) {
      halfList = Math.ceil(sizeOfList/2);
    } else {
       halfList =  Math.floor(sizeOfList/2);
    }
    
    let slowPointer = head;
    while(slowPointer){
        halfList--;
        slowPointer = slowPointer.next;
        if(halfList === 0) return slowPointer;
    }
    
     
    
    console.log(sizeOfList,halfList);
};