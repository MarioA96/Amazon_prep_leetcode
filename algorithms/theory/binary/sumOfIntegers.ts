/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.
*/

function getSum(a: number, b: number): number {
    
    let generate:number;
    let propagate: number;

    generate = a & b;
    propagate = a | b;

    let generateString = generate.toString(2);
    let propagateString = propagate.toString(2);

    let clas = [
        0, 
        generate>>1, 
        (generate>>2)|(generate>>1)&(propagate>>2), 
        (generate>>3)|(generate>>2)&(propagate>>3)|(generate>>1)&(propagate>>2)&(propagate>>3),
        (generate>>4)|(generate>>3)&(propagate>>4)|(generate>>2)&(propagate>>3)&(propagate>>4)|(generate>>1)&(propagate>>2)&(propagate>>3)&(propagate>>4)
    ]

    console.log("Generate: ", generateString, ", Propagate: ", propagateString, "\nCLAs: ", clas);

    return 0;
};

function main(){
    const number_1: number = 10; //0001010
    const number_2: number = 11; //0001011   

    console.log("Exec output: ", getSum(number_1, number_2));
}

main();