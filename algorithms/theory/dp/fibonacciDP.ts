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

// Solution strat: Top-Down memoization approach
let calculations3 = 0;
function fibonacciMemoizedClosure(){
    let cache = {};

    return function fib(n: number){
        // if(n<2){
        //     return cache[n];
        // }

        // if(n-2 in cache){
        //     return cache[n-1] + cache[n-2];
        // } else {
        //     cache[n-2] = fib(n-2);
        //     cache[n-1] = fib(n-1);

        //     return cache[n-1] + cache[n-2];
        // }
        calculations3++;
        if(n in cache){
            return cache[n];
        }else {
            if(n<2){
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

// Solution strat: Bottom-Up, probably harder to know when to use
function fibonacciMaster2(n: number){
    let answer = [0,1];

    for(let i=2; i<=n; i++) {
        answer.push(answer[i-2] + answer[i-1]);
    }

    return answer.pop();
}

function main(){ 

    // console.log("fibonacci: ", fibonacci(20));
    // console.log("calculations: ", calculations1);

    console.log("fibonacci: ", fibonacciMemoized(98));
    console.log("calculations: ", calculations2);

    const fibCls = fibonacciMemoizedClosure();
    console.log("fibonacci: ", fibCls(98));
    console.log("calculations: ", calculations3);

    console.log("fibonacci 2: ", fibonacciMaster2(98));
}

main();