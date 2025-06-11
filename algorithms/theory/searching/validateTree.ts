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
 


function validateTree(arr: number[]): boolean{

    //CODE

    return false;
}

function main(){

    const treeArray_1 = [2,1,3];
    const treeArray_2 = [5,1,4,null,null,3,6];

    // console.log(validateTree(treeArray_1));
    // const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
    const root = new TreeNode(2);
    root.left = new TreeNode(1);
    root.right = new TreeNode(3);
    console.log(root);

}

main();