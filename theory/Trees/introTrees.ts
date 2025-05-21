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

        let holdingPointer = this.root; //holdingPointer o currentNode
        let height = this.height;
        const newNode = new NodeI(_value);

        while(height >= 1){
            if(holdingPointer.value > _value){
                if(!holdingPointer.left){
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
            return false;
        }
        
        let height = this.height;
        while(height >= 1){
            if(holdingPointer?.value === _value){
                return holdingPointer;
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
        return false;

    }

    remove(_value){
        if(!this.root){
            return null;
        }
        
        if(!this.root.left && !this.root.right){
            this.root = null;
        }
        else{
            //Lo encontro en el nodo raiz
            if(this.root.left || this.root.right){
                if(this.root.left){
                    this.root = this.root.left;
                    this.root.left = null;
                }
                else {
                    this.root = this.root.right;
                    this.root.right = null;
                }

                
                return this;
            }
        }

    }

}

class AnotherBinarySearchTree {

    public root: NodeI | null;

    constructor(){
        this.root = null;
    }

    insert(_value){
        const newNode = new NodeI(_value);
        if(this.root===null){
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while(true){
                if(_value < currentNode.value){
                    //left
                    if(!currentNode.left){
                        currentNode.left = newNode;

                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //right
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(_value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        while(currentNode){
            if(_value < currentNode.value){
                currentNode = currentNode.left;
            } else if(_value > currentNode.value){
                currentNode = currentNode.right;
            } else if(currentNode.value === _value){
                return currentNode;
            }
        }
        return false;
    }

    remove(_value){
        if(!this.root){
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;

        while(currentNode){
            if(_value < currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if(_value > currentNode.value){
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if(currentNode.value === _value){
                //found the node to delete
                //case 1: no children
                if(!currentNode.left && !currentNode.right){
                    // we are at the root
                    if(currentNode === this.root){
                        this.root = null;
                    } else {
                        //check if we are in the left or right of the parent
                        if(parentNode.left === currentNode){
                            parentNode.left = null;
                        } else {
                            parentNode.right = null;
                        }
                    }

                    return this;
                }
                //case 2: one child
                else if(!currentNode.right || !currentNode.left){
                    if(currentNode === this.root){
                        this.root = currentNode.left ? currentNode.left : currentNode.right;
                    } else {
                        if(parentNode.left === currentNode){
                            parentNode.left = currentNode.left ? currentNode.left : currentNode.right;
                        } else {
                            parentNode.right = currentNode.left ? currentNode.left : currentNode.right;
                        }
                    }

                    return this;
                }
                //case 3: two children
                else {
                    let minRightChild = currentNode.right;
                    while(minRightChild && minRightChild.left){
                        minRightChild = minRightChild.left;
                    }
                    const holdingValue = minRightChild.value;

                    this.remove(minRightChild.value);
                    currentNode.value = holdingValue;

                    return this;
                }
            }
        }
    }

}

function main(){

    const tree = new BinarySearchTree();

    tree.insert(9);
    tree.insert(4);
    tree.insert(20);
    tree.insert(1);
    tree.insert(6);
    tree.insert(15);
    tree.insert(170);
    
    console.log(tree.lookup(15));

    // const tree2 = new AnotherBinarySearchTree();

    // tree2.insert(9);
    // tree2.insert(4);
    // tree2.insert(20);
    // tree2.insert(1);
    // tree2.insert(6);
    // tree2.insert(15);
    // tree2.insert(170);

    // console.log(tree2.lookup(171));
    // console.log(tree2);

    // tree2.remove(15);
    // console.log(tree2);

}

main();