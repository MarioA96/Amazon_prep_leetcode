// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89

let calculations = 0;
function fibonacci(n: number): number{

    calculations++;
    if(n<2){
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);

}

function main(){ 

    console.log("fibonacci: ", fibonacci(20));
    console.log("calculations: ", calculations);

}

main();