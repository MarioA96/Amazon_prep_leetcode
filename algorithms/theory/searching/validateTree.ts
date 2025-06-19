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
 
function busquedaComparativa(root: TreeNode, actual: number){
    
    let currentNode = root;
    let treeLevel = 0;

    while(1){
        if(actual<currentNode.val){
            if(currentNode.left){
                currentNode = currentNode.left;
                treeLevel++;
            }
            else{
                return false;
            }
        }
        else if(actual>currentNode.val){
            if(currentNode.right){
                currentNode = currentNode.right;
                treeLevel++;
            }
            else{
                return false;
            }
        }
        else if(actual === currentNode.val){
            return true;
        }
    }
}

function checkDuplications(root, set) { 
    if (root == null) return false; 

    if (set.has(root.data)) return true; 

    set.add(root.data); 
    
    return checkDuplications(root.left, set) || checkDuplications(root.right, s); 
} 

function hasDuplications(root){ 
    let set = new Set();

    return checkDuplications(root, set); 
} 

function isValidBST(root: TreeNode) {
    let currentNode = root;
    
    if(!currentNode.left && !currentNode.right){
        return true;
    }
    
    const isDuplicated = hasDuplications(root);
    if(isDuplicated) return false;

    const queue = [];
    const list = [];
    
    queue.push(currentNode);
    
    while(queue.length > 0){
        currentNode = queue.shift();
        
        if(currentNode.val === "null"){
            list.push("null");
        } else {
            list.push(currentNode.val);
        }

        if(!currentNode){
            continue;
        }
        if(!currentNode.left && !currentNode.right){
            continue;
        }

        if(currentNode.left){
            const left = currentNode.left;
            queue.push(currentNode.left);
            // const level = Math.floor( Math.log2(list.length+queue.length) );

            if(left.val >= currentNode.val){
                return false;
            }
            else {
                const res = busquedaComparativa(root, left.val);
                if(!res) return false;
            }
        }
        else {
            queue.push("null");
        }

        if(currentNode.right){
            const right = currentNode.right;
            queue.push(currentNode.right);
            // const level = Math.floor( Math.log2(list.length+queue.length) );

            if(right.val <= currentNode.val){
                return false;
            }
            else {
                const res = busquedaComparativa(root, right.val);
                if(!res) return false;
            }
        }
        else {
            queue.push("null");
        }

    }

    console.log(list);
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