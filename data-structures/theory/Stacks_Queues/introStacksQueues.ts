
class NodeI {
    private value: any;
    private next: any;
    
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    private top: any;
    private bottom: any;
    private length: number;

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }
    push(value){
        const newNode = new NodeI(value);
        if(this.length===0){
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.length++;
        return this;
    }
    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom){
            this.bottom = null;
        }

        // const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;

        return this;
    }

    //isEmpty
}

class StackArray {
    private array: any;

    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }

    //isEmpty
}

class Queue {
    private first: any;
    private last: any;
    private length: number;
    
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first;
    }

    enqueue(_value){
        const node = new NodeI(_value);
        if(this.length===0){
            this.first = node;
            this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
        return this;
    }

    dequeue(){
        if(!this.first){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;

        return this;
    }

}

// Leetcode 232. Implement Queue using Stacks
class QueueWStacks {
    
}

function main(){

    const myStack = new StackArray();
    myStack.push('Google');
    myStack.push('Udemy');
    myStack.push('Discord');
    console.log(myStack.peek());

    myStack.pop();
    console.log(myStack.peek());

    const myQueue = new Queue();
    myQueue.enqueue('Mario');
    myQueue.enqueue('Alberto');
    myQueue.enqueue('Quiroz');
    myQueue.enqueue('Soldan');

    myQueue.dequeue();
    console.log(myQueue.peek());
}

main();