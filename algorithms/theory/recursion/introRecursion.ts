
function inception(counter: number): string{
    if(counter > 3){
        return 'done';
    }

    counter++;
    //We should always tell the main stack case for recursion to return
    // because otherwise it will return undefined, becasue we never told the base case
    // to return anything, just the local case that is going to be bubbled inside the other call
    return inception(counter);
}

function main(){

    let counter = 0;
    console.log( inception(counter) );

}

main();


/*
    //* 1. Identify the base case
    //* 2. Identify the recursive case
    //* 3. Get closer and closer and return when needed. Usually you have 2 returns
*/