

class DoublyLinkedList {
    private head: { value: number, next: ({}|null), prev: ({}|null) };
    private tail: { value: number, next: ({}|null), prev: ({}|null) };
    private length: number;

    constructor(_value: any){
        this.head = {
            value: _value,
            next: null,
            prev: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(_value: number){
        // Append a value next to the last node
        const newNode = {
            value: _value,
            next: null,
            prev: null
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;

    }
    prepend(_value: number){
        const newNode: ({value: number, next: ({}|null), prev: ({}|null)}) = {
            value: _value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
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
                next: null,
                prev: null
            }
            const leader = this.traverseToIndex(index-1);
            const follower = leader.next;
            leader.next = newNode;
            newNode.prev = leader;
            newNode.next = follower;
            follower.prev = newNode;

            this.length++;
            return this;
        }
    }

    remove(index){
        // We can check params
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
            const leader = this.traverseToIndex(index-1);
            const follower = leader.next;
            const unwantedNode = leader.next;
            leader.next = unwantedNode.next;
            unwantedNode.prev = follower;

            this.length--;
            return this;
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
    
    reverse(){
        if(!this.head.next || this.length === 1){
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second){
            // Swaping throu every item
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;

        return this;
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


function main(){
    const myLinkedList = new DoublyLinkedList(10);
    myLinkedList.append(5);
    myLinkedList.append(16);
    myLinkedList.prepend(1); // [1,10,5,16]

    myLinkedList.insert(1, 8); // [1,8,10,5,16]
    myLinkedList.insert(3, 32); // [1,8,10,32,5,16]

    myLinkedList.remove(0); // [8,10,32,5,16]
    myLinkedList.remove(9); // [8,10,32,5]
    myLinkedList.remove(2); // [8,10,5]

    myLinkedList.reverse(); // [5, 10, 8]

    // console.log(myLinkedList);
    console.log(myLinkedList.printList());
}

main();