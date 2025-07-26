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
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let carry = 0;

    let c1 = l1;
    let c2 = l2;

    let l3 = {...l1};
    let c3 = l3;

    while( c1 !== null && c2 !== null ){
        if(c1 === null){

        }
        else if(c2 === null){
            
        }

        c3.val = (l1.val + l2.val + carry)%10

        if( (l1.val+l2.val) > 9){
            carry = 1;
        }

        c1 = c1.next;
        c2 = c2.next;

        c3 = c3.next;
    }

    return null;

};

function main(){

    const l1 = [2,1,5,1];
    const l2 = [1,3,1,5];

    console.log("L1: ", l1, ", L2: ", l2);

}

main();