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
 
function busquedaComparativa(root, actual){
    let currentNode = root;

    while(1){
        if(actual<currentNode.val){
            if(currentNode.left){
                currentNode = currentNode.left;
            }
            else{
                return false;
            }
        }
        else if(actual>currentNode.val){
            if(currentNode.right){
                currentNode = currentNode.right;
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

    if (set.has(root.val)) return true; 

    set.add(root.val); 
    
    return checkDuplications(root.left, set) || checkDuplications(root.right, set); 
} 

function hasDuplications(root){ 
    let set = new Set();

    return checkDuplications(root, set);
} 

function isValidBST(root) {
    const isDuplicated = hasDuplications(root);
    if(isDuplicated) return false;

    let currentNode = root;
    
    if(!currentNode.left && !currentNode.right){
        return true;
    }
    
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