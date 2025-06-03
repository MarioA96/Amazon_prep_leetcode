
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

    const solvedArray = [];
    for(let i=0; i<array.length; i++){

        //delante, enmedio, inicio
        solvedArray.push(array[i]);
        if(solvedArray[i]>solvedArray[i]){

        }

    }

    return []
}

function main(){

    // const basket = [2,65,34,2,1,7,8];
    // console.log( basket.sort( (a,b) => a-b ) );

    // const spanish = ['único', 'árbol', 'cosas', 'techo'];
    // console.log( spanish.sort( (a,b) => a.localeCompare(b) ) );

    const array = [99,44,6,2,1,5,63,87,283,4,0];
    // const sortedArray = bubbleSort(array);
    // const sortedArray = selectionSort(array);
    const sortedArray = insertionSort(array);

    console.log(sortedArray);

}

main();