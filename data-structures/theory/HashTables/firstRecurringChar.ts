

const firstRecurringChar = (arr: any[]): (number|undefined) => 
{
    let map = {};

    for(let i=0; i<arr.length; i++){
        if(!map[arr[i]]){
            map[arr[i]] = true;
        }
        else {
            return arr[i];
        }
    }

    return undefined;
}


function main()
{

    const arr: number[] = [2,5,1,2,3,5,1,2,4];
    const output: (number|undefined) = firstRecurringChar(arr);

    console.log(output);
}

main();