
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


function main(){

    // const basket = [2,65,34,2,1,7,8];
    // console.log( basket.sort( (a,b) => a-b ) );

    // const spanish = ['único', 'árbol', 'cosas', 'techo'];
    // console.log( spanish.sort( (a,b) => a.localeCompare(b) ) );

    const array = [99,44,6,2,1,5,63,87,283,4,0];
    const sortedArray = bubbleSort(array);

    console.log(sortedArray);

}

main();