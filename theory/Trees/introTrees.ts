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

        while(height >= 1){
            if(holdingPointer.value > _value){
                if(!holdingPointer.left){
                    const newNode = new NodeI(_value);
                    holdingPointer.left = newNode;

                    this.height++;
                    return this;
                }
                else {
                    holdingPointer = holdingPointer.left;
                    height/=2;
                }
            }
            else if(holdingPointer.value < _value){
                if(!holdingPointer.right){
                    const newNode = new NodeI(_value);
                    holdingPointer.right = newNode;

                    this.height++;
                    return this;
                }
                else {
                    holdingPointer = holdingPointer.right;
                    height/=2;
                }
            }
        }
    }
    lookup(_value){
        let holdingPointer = this.root;
        
        if(this===null){
            return null;
        }
        
        let height = this.height;
        while(height >= 1){
            if(holdingPointer?.value === _value){
                return true;
            }
            else if(holdingPointer?.value < _value){
                holdingPointer = holdingPointer?.right;
                height/=2;
            }
            else if(holdingPointer?.value > _value){
                holdingPointer = holdingPointer?.left;
                height/=2;
            }
        }
    }

    //remove
}

function main(){

    const binarySearch = new BinarySearchTree();

    binarySearch.insert(9);
    binarySearch.insert(4);
    binarySearch.insert(20);
    binarySearch.insert(1);
    binarySearch.insert(6);
    binarySearch.insert(15);
    binarySearch.insert(170);
    
    console.log(binarySearch.lookup(17));

}

main();