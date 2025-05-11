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

        insert(index, _value){
            if(index===0){
                return this.prepend(_value);
            }
            else if(index>=this.length){
                return this.append(_value);
            }
            else {
                const newNode = {
                    value: _value,
                    next: null
                }
                const leader = this.traverseToIndex(index-1);
                const holdingPointer = leader.next;
                leader.next = newNode;
                newNode.next = holdingPointer;

                this.length++;
                return this;
            }
        }

        remove(index){
            if(index===0){
                if(this.head!==null){
                    const tmp = this.head;
                    this.head = this.head.next;
                    tmp.next = null;
                }
            }
            else if(index>=this.length) {
                if(this.tail !== null){
                    let pre = this.head;
                    let tmp = this.head.next;

                    while(tmp.next !== null){
                        pre = pre.next;
                        tmp = tmp.next;
                    }

                    pre.next = null;
                    tmp = null;
                    this.tail = pre;
                }
            }
            else {
                if(this.tail !== null){
                    let pre = this.head;
                    
                    for(let k=0; k<index-1; k++){
                        pre = pre.next;
                    }

                    let del = pre.next;
                    let aft = del.next;

                    pre.next = aft;
                    del = null;
                }
            }
        }

        traverseToIndex(index) {
            //Check parameters
            let counter = 0;
            let currentNode = this.head;

            while(counter !== index){
                currentNode = currentNode.next;
                counter++;
            }
            
            return currentNode;
        }

        printList(){
            const array: number[] = [];
            let currentNode: any = this.head;

            while(currentNode !== null){
                array.push(currentNode.value);
                currentNode = currentNode.next;
            }

            return array;
        }
    }

    const myLinkedList = new LinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1); // [1,10,5,16]

    myLinkedList.insert(1, 8); // [1,8,10,5,16]
    myLinkedList.insert(3, 32); // [1,8,10,32,5,16]

    myLinkedList.remove(0); // [8,10,32,5,16]
    myLinkedList.remove(9); // [8,10,32,5]
    myLinkedList.remove(2); // [8,10,5]

    console.log(myLinkedList.printList());
}

function main()
{
    builtLinkedLists();
}

main();