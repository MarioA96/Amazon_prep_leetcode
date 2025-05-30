// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

//* Theorem: Anything that you can do with a recursion CAN be done iteratively

function fibonacciIterative(num: number): number{ // O(n)

    if(num < 2){
        return num;
    }

    const fib: number[] = [0,1];
    for (let i = 2; i <= num; i++) {
        fib.push( fib[i-2]! + fib[i-1]! );
    }

    return fib[num]!;
}

function fibonacciRecursive(num: number): number{ // O(2^n)
    
    let answer: number = 1;

    if(num < 2){
        return num;
    }
    else if(num === 2){
        return 1;
    }

    answer = fibonacciRecursive(num-1) + fibonacciRecursive(num-2);
    // answer = fibonacciRecursive(5) + fibonacciRecursive(4) -> 8 + 5 = 13
    // answer = fibonacciRecursive(4) + fibonacciRecursive(3) -> 5 + 3 = 8
    // answer = fibonacciRecursive(3) + fibonacciRecursive(2) -> 3 + 2 = 5
    // answer = fibonacciRecursive(2) + fibonacciRecursive(1) -> 2 + 1 = 3

    return answer;
}

function main(){

    let num = 5;

    const answer_1 = fibonacciIterative(num);
    const answer_2 = fibonacciRecursive(num);

    console.log(answer_1);
    console.log(answer_2);

}

main();