
/*
Write two functions that finds the factorial of any number.
One should use recursive, the other should just use a 'for' loop.
*/


function findFactorialRecursive(num:number): number{

    let answer: number = 1;

    if(num <= 1){
        return 1;
    }
    else if(num === 2){
        return 2;
    }

    answer = num*findFactorialRecursive(num-1);
    // 4 * factorial(3) -> 4 * 6 = 24
    // 3 * factorial(2) -> 3 * 2 = 6
    // 2 * factorial(1) -> 2 * 1 = 2
    // factorial(1) = 1

    return answer;
}

function findFactorialIterative(num:number){

    let answer: number = 1;
    
    if(num<=1){
        return 1;
    }
    else if(num===2){
        return 2;
    }

    for(let i=1; i<=num; i++){
        // answer = 1 * 1
        // answer = 1 * 2
        // answer = 2 * 3
        // answer = 6 * 4
        answer *= i;
    }

    return answer;
}

function main(){

    const num = 5;

    const answer_1 = findFactorialRecursive(num); //O(n)
    console.log('Recursive: ', answer_1);

    const answer_2 = findFactorialIterative(num); //O(n)
    console.log('Iterative: ', answer_2);

}

main();