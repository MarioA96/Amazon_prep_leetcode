/*
Keywords:
Root, Parent, Child, Leaf, Sibling, Abstract syntax tree
Perfect Binary Tree, Full Binary Tree

# of nodes upper the level n = 2^h - 1
log #nodes = height
# of nodes in lvl n = 2^n
log2(8) = 3 
*/
class NodeI {
    public left: any;
    public right: any;
    public value: any;

    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    private root: NodeI | null;
    private height: number = 0;

    constructor(){
        this.root = null;
    }
    insert(_value){
        if(this.root===null){
            const newNode = new NodeI(_value);
            this.root = newNode;
            this.height++;

            return this;
        }
        let holdingPointer = this.root;
        let height = this.height;
        this.height++;

        while(height > 0){
            if(holdingPointer.value > _value){
                if(!holdingPointer.left){
                    const newNode = new NodeI(_value);
                    holdingPointer.left = newNode;

                    return this;
                }
                else {
                    holdingPointer = holdingPointer.left;
                    height--;
                }
            }
            else if(holdingPointer.value < _value){
                if(!holdingPointer.right){
                    const newNode = new NodeI(_value);
                    holdingPointer.right = newNode;

                    return this;
                }
                else {
                    holdingPointer = holdingPointer.right;
                    height--;
                }
            }
        }
    }
    lookup(){

    }

    //remove
}

function main(){

    const binarySearch = new BinarySearchTree();

    binarySearch.insert(15);
    binarySearch.insert(18);
    binarySearch.insert(8);
    binarySearch.insert(28);
    binarySearch.insert(4);
    // binarySearch.lookup();

    console.log(binarySearch);

}

main();