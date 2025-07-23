/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.
*/

function getSum(a: number, b: number): number {
    
    let generate:number;
    let propagate: number;

    generate = a & b;
    propagate = a | b;

    console.log("Generate: ", generate.toString(2), ", Propagate: ", propagate.toString(2));

    return 0;
};

function main(){
    const number_1: number = 10; //0001010
    const number_2: number = 11; //0001011   

    console.log("Exec output: ", getSum(number_1, number_2));
}

main();