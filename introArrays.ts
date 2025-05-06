const staticArray = () => {
    const strings = ['a', 'b', 'c', 'd'];
    // 4*4 = 16 bytes of storage

    // push
    strings.push('e'); // O(1) -> O(n)

    //pop
    strings.pop();
    strings.pop(); // O(1)

    //unshift - insert
    strings.unshift('x'); //O(n)

    //splice - delete
    strings.splice(2, 0, 'alien'); //O(n)

    console.log(strings);
}

const dynamicArray = () => {
    // lookup O(1)
    // append* O(1) -> Can be O(n)
    // insert O(n)
    // delete O(n)
}

const selfMadeArray = () => {

    class MyArray {
        private length;
        private data;

        constructor(){
            this.length = 0;
            this.data = {};
        }

        get(index){
            return this.data[index];
        }

        push(item){
            this.data[this.length] = item;
            this.length++;
            return this.length;
        }

        pop(){
            const lastItem = this.data[this.length-1];
            delete this.data[this.length-1];
            this.length--;

            return lastItem;
        }

        delete(index){
            const item = this.data[index];
            this.shiftItems(index);
            
            return item;
        }

        shiftItems(index){
            for(let i=index; i<this.length-1; i++)
            {
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length-1];
            this.length--;
        }
    }

    const newArray = new MyArray();
    newArray.push('hi');
    newArray.push('you');
    newArray.push('!');
    // newArray.pop();
    newArray.delete(0);
    newArray.push('are');
    newArray.push('nice');
    newArray.delete(1);

    console.log(newArray);

}

function main(){
    // staticArray();
    selfMadeArray();
}

main();