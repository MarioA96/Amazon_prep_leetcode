// visualgo.net/en/list

function introLinkedLists()
{
    let obj1 = { a: 'something' };
    let obj2 = obj1;

    obj1.a = 'booya';
    // delete obj1;

    // console.log('1', obj1);
    console.log('2', obj2);
}

function builtLinkedLists()
{

    // 10->5->16

    // let myLinkedLists = {
    //     head: {
    //         value: 10,
    //         next: {
    //             value: 5,
    //             next: {
    //                 value: 16,
    //                 next: null
    //             }
    //         },
    //     }
    // }

    class Node {
        private value: number;
        private next: any;

        constructor(value){
            this.value = value;
            this.next = null
        }
    }

    class LinkedList {
        private head: { value: number, next: ({}|null) };
        private tail: { value: number, next: ({}|null) };
        private length: number;

        constructor(_value: any){
            this.head = {
                value: _value,
                next: null
            }
            this.tail = this.head;
            this.length = 1;
        }
        append(_value: number){
            // Append a value next to the last node
            // const newNode = new Node(value);
            const newNode = {
                value: _value,
                next: null
            }
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;

            return this;

            // if(this.length===1){
            //     this.head.next = {
            //         value: _value,
            //         next: null
            //     }
            //     this.tail = this.head.next;
            // }
            // else{
            //     this.tail.next = {
            //         value: _value,
            //         next: null
            //     }
            // }
            // ++this.length;
        }
        prepend(_value: number){
            // const oldNodes = this.head;
            // this.head = {
            //     value: _value,
            //     next: oldNodes 
            // }
            const newNode: ({value: number, next: ({}|null)}) = {
                value: _value,
                next: null
            };
            newNode.next = this.head;
            this.head = newNode;
            this.length++;

            return this;
        }

        insert(index, value){
            
        }

        printList(){
            const array: number[] = [];
            let currentNode: ({value: number, next: ({}|null)}|null) = this.head;

            while(currentNode !== null){
                array.push(currentNode.value);
                currentNode = currentNode.next;
            }
        }
    }

    const myLinkedList = new LinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1);

    console.log(myLinkedList);
}

function main()
{

    builtLinkedLists();
    
}

main();