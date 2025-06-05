
function bubbleSort(array: number[]): number[]{

    let len = array.length;
    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(array[j]!>array[j+1]!){
                let temp = array[j];
                array[j]! = array[j+1];
                array[j+1]! = temp;
            }
        }
        len--; // After one loop, the last element ist always the greatest and so on...
    }

    return array;
}

function selectionSort(array: number[]): number[]{

    let len = array.length;
    let jindex = 0;
    let index = -1;

    for(let i=0; i<len; i++){
        let holder = array[i]!;

        for(let j=jindex; j<len; j++){
            if(holder>array[j]){
                holder = array[j];
                index = j;
            }
        }

        jindex++;

        let temp = array[i];
        array[i] = holder;
        array[index] = temp;
    }
    // [99,44,6,2,1,5,63,87,283,4,0]
    // [0,44,6,2,1,5,63,87,283,4,99]
    // [0,1,6,2,44,5,63,87,283,4,99]
    // [0,1,2,6,44,5,63,87,283,4,99]
    // ...
    // [0,1,2,4,5,6,44,63,87,99,283]

    return array;
}

function insertionSort(array: number[]): number[]{
    
    const solvedArray:number[] = [];

    solvedArray[0] = array[0];
    for(let i=1; i<array.length; i++){
        
        let len = solvedArray.length;
        for(let j=0; j<len; j++){
            if(array[i] < solvedArray[j]){
                while(len>j){
                    solvedArray[len] = solvedArray[len-1];
                    
                    len -= 1;
                }
                solvedArray[j] = array[i];
            }
            else if(array[i] > solvedArray[j]){
                if(!solvedArray[j+1]){ 
                    solvedArray[j+1] = array[i];
                }
                
                continue;
            }
        }
        
    }
    
    return solvedArray;
}

// We can use methods of array such as:
// Move number to the first position: array.unshift(array.splice(i,1)[0])
// Move number to the right spot: array.splice(j,0,array.splice(i,1)[0])
function anotherInsertionSort(array: number[]) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
        if (array[i] < array[0]) {
            // Move number to the first position
            array.unshift(array.splice(i, 1)[0]);
        } else {
            // Find where number should go
            for (let j = 1; j < i; j++) {
                if (array[i] > array[j - 1] && array[i] < array[j]) {
                    // Move number to the right spot
                    array.splice(j, 0, array.splice(i, 1)[0]);
                }
            }
        }
    }

    return array;
}

function mergeSort(array: number[]): number[]{

    if(array.length === 1){
        return array;
    }

    if(array.length === 2){
        if(array[0]>array[1]){
            const temp = array[0];
            array[0] = array[1];
            array[1] = temp;
            return array;
        }
        else {
            return array;
        }
    }

    // Split array-in into right and left
    const left = array.slice(0, Math.floor(array.length/2));
    const right = array.slice(Math.floor(array.length/2), array.length);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );

}

function merge(left: number[], right: number[]): number[]{

    let arr: number[] = [];

    let lenLeft = left.length;
    let lenRight = right.length;
    let i=0;
    let j=0;

    while(lenLeft>0 && lenRight>0){
        if(left[i]<right[j]){
            arr.push(left[i]);
            lenLeft--;
            i++;
        }
        else if(left[i]>right[j]){
            arr.push(right[j]);
            lenRight--;
            j++;
        }
    }

    if(lenLeft===0){
        arr = arr.concat(right);
    }
    else if(lenRight===0){
        arr = arr.concat(left);
    }

    return arr;
}

function main(){

    // const basket = [2,65,34,2,1,7,8];
    // console.log( basket.sort( (a,b) => a-b ) );

    // const spanish = ['único', 'árbol', 'cosas', 'techo'];
    // console.log( spanish.sort( (a,b) => a.localeCompare(b) ) );

    // const array = [99,44,6,2,1,5,63,87,283,4,0];
    const array = [46,1,7,25,2,22,42,8,20];
    // const array = [8,1,25,42];
    // const sortedArray = bubbleSort(array);
    // const sortedArray = selectionSort(array);
    // const sortedArray = insertionSort(array);
    const sortedArray = mergeSort(array);

    console.log(sortedArray);

}

main();