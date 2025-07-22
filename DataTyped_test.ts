import { BST } from 'data-structure-typed';

function main(){

    const entries = [9,4,20,1,6,15,170];

    const bst = new BST(entries);
    bst.print();

    const result = bst.find( (i)=>{ return i===171 } );
    console.log(result);

}

main();