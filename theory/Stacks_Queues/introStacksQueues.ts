
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

function main(){

    const myStack = new Stack();
    myStack.push('Google');
    myStack.push('Udemy');
    myStack.push('Discord');
    console.log(myStack.peek());

    myStack.pop();
    console.log(myStack.peek());

}

main();