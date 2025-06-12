
function addTo80(n: number): number{
    console.log("Long time");
    
    return n+80;
}

let cache = {};
function memoizedAddTo80(n: number){
    if(n in cache){
        console.log("Inmediate cache result");
        return cache[n];
    }else {
        console.log("Takes a long time");
        cache[n] = n + 80;
        return cache[n];
    }
}

function main(){

    console.log( "1: ", memoizedAddTo80(5) );
    console.log( "2: ", memoizedAddTo80(5) );
}

main();