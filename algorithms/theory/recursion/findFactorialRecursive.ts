
/*
Write two functions that finds the factorial of any number.
One should use recursive, the other should just use a 'for' loop.
*/


function findFactorialRecursive(num:number): number{

    let answer: number = 1;

    if(num<=0){
        return 1;
    }else if(num === 1){
        return 1;
    }

    answer = num*findFactorialRecursive(num-1);

    return answer;
}

function findFactorialIterative(num:number){

    let answer: number = 1;
    
    if(num<=0){
        return 1;
    }
    if(num===1){
        return 1;
    }

    for(let i=1; i<=num; i++){
        
        answer *= i;
    }

    return answer;
}

function main(){

    const num = 9;

    // const answer_1 = findFactorialRecursive(num);
    const answer_2 = findFactorialIterative(num);

    // console.log(answer_1);
    console.log(answer_2);

}

main();