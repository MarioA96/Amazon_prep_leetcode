
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

//Closure approach, help us avoiding a global variable
// And so now we have more flexibility pointing the scope of the function
function memoizedAddTo80Closure(){
    let cache = {};

    return function(n: number): number{
        if(n in cache){
            console.log("Inmediate cache result");

            return cache[n];
        }
        else {
            console.log("Takes a long time");
            cache[n] = n + 80;

            return cache[n];
        }
    }
}

function main(){

    // console.log( "1: ", memoizedAddTo80(5) );
    // console.log( "2: ", memoizedAddTo80(5) );

    const memoized = memoizedAddTo80Closure();
    console.log( "1: ", memoized(5) );
    console.log( "2: ", memoized(5) );
}

main();