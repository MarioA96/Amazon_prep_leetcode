// Given 2 arrays os characters, return true in case at least one 
// element matches one or another array or false in case theres no coincidence

// example array1=['a','b','x','f'], array2=['x','c','e'], output: true

// The hashing approach
function commonItem(arr1: string[], arr2: string[]){

    // first we iterate throught any of both arrays so we store it into an object
    let map = {};
    for(let i = 0; i < arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i];
            map[item] = true;
        }
    }

    for(let j = 0; j < arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }
    return false;
}

function main(){

    const arr1 = ['a','b','t','f'];
    const arr2 = ['x','c','e'];

    console.log( commonItem(arr1, arr2) );

}

main();