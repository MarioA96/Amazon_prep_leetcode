// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

let calculations1 = 0;
function fibonacci(n: number): number{

    calculations1++;
    if(n<2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);

}


let calculations2 = 0;
let cache = {
    0: 0,
    1: 1,
    2: 1
};
function fibonacciMemoized(n: number){

    calculations2++;
    if(n<2){
        return cache[n];
    }

    if(n-2 in cache){
        return cache[n-1] + cache[n-2];
    } else {
        cache[n-2] = fibonacciMemoized(n-2);
        cache[n-1] = fibonacciMemoized(n-1);

        return cache[n-1] + cache[n-2];
    }

}

function main(){ 

    console.log("fibonacci: ", fibonacci(20));
    console.log("calculations: ", calculations1);

    console.log("fibonacci: ", fibonacciMemoized(20));
    console.log("calculations: ", calculations2);

}

main();