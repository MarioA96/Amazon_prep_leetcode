// Given an array that represents a tree, validate if it is a BST, true if it is, false if not
// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
 
function busquedaComparativa(root, parent, actual){
    currentNode = root;
    const map = {};

    while(1){
        if(actual<currentNode.val){
            if(currentNode.left){
                lastVal = currentNode.val;
                currentNode = currentNode.left;
            }
            else{
                return false;
            }
        }
        else if(actual>currentNode.val){
            if(currentNode.right){
                lastVal = currentNode.val;
                currentNode = currentNode.right;
            }
            else{
                return false;
            }
        }
        else if(actual === currentNode.val){
            // if(actual in map){
            //     return false;
            // }
            return true;
        }
    }
}

function isValidBST(root: TreeNode | null): any {
    let currentNode = root;
    
    // if(!currentNode.left && !currentNode.right){
    //     return true;
    // }
    
    const queue = [];
    const list = [];
    
    queue.push(currentNode);
    
    while(queue.length){

        currentNode = queue.shift();
        list.push(currentNode.val);

        if(currentNode === null){
            continue;
        }
        if(!currentNode.left && !currentNode.right){
            continue;
        }
        if(currentNode.left){
            let leftVal = currentNode.left;
            if(leftVal.val >= currentNode.val){
                return false;
            }
            queue.push(currentNode.left);
        }
        // else {
        //     queue.push(null);
        // }
        if(currentNode.right){
            let rightVal = currentNode.right;
            if(rightVal.val <= currentNode.val){
                return false
            }
            // queue.push(currentNode.right);
        }
        // else {
        //     queue.push(null);
        // }
    }

    //console.log(list);
    return true;
};

function main(){

    const treeArray_1 = [2,1,3];
    const treeArray_2 = [5,1,4,null,null,3,6];

    // console.log(validateTree(treeArray_1));
    // const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    console.log(root);
//     [2,1,3]
// [5,1,4,null,null,3,6]

}

main();