/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
/*
Examples:
    Input: l1 = [2,4,3], l2 = [5,6,4]
    Output: [7,0,8]
    Explanation: 342 + 465 = 807.

    Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
    Output: [8,9,9,9,0,0,0,1]
*/
// Definition for singly-linked list.
class Node {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
class ListNode {
    private head: Node;
    private tail: Node;
    private length: number;

    constructor(_value: any){
        this.head = new Node();
        this.tail = this.head;
        this.length = 1;
    }

    appendListFromArray();
}
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    

};

function main(){

    const arrayL1 = [2,1,5,1];
    const l1 = new ListNode(3);
    // arrayL1.forEach(element => {
    //     l1.next = new ListNode(element);
    // });

    const arrayL2 = [1,3,1,5];
    const l2 = new ListNode(2);
    arrayL2.forEach(element => {
        l2.next = new ListNode(element);
    });

    console.log("L1: ", l1, ", L2: ", l2);

}

main();