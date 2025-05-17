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
    private left: any;
    private right: any;
    private value: any;

    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    private root: any;

    constructor(){
        this.root = null;
    }
    insert(_value){

    }
    lookup(){

    }

    //remove
}

function main(){

    const binarySearch = new BinarySearchTree();
    
    binarySearch.insert(15);
    binarySearch.lookup();

    console.log(binarySearch);

}

main();