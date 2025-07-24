/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.
*/

//Intento, solo realiza suma pero hasta 4 bits y no toma en cuenta los numeros negativos
function getSum(a: number, b: number): number {
    
    let generate:number;
    let propagate: number;

    generate = a & b;
    propagate = a | b;

    let generateString = generate.toString(2);
    let propagateString = propagate.toString(2);

    let clas = [
        0, 
        generate & 1, 
        (generate & 2)|(generate & 1)&(propagate & 2), 
        (generate & 4)|(generate & 2)&(propagate & 4)|(generate & 1)&(propagate & 2)&(propagate & 4),
        (generate & 8)|(generate & 4)&(propagate & 8)|(generate & 2)&(propagate & 4)&(propagate & 8)|(generate & 1)&(propagate & 2)&(propagate & 4)&(propagate & 8)
    ];

    let CLA = 0;
    for(let i=0; i<5; i++){
        CLA |= clas[i]!;
    }
    CLA = CLA << 1;

    let sum = (a ^ b) | CLA;
    console.log(
        "Generate: ", generateString, ", Propagate: ", propagateString, 
        "\nCLAs: ", clas, ", CLA: ", CLA, 
        "\nSum: ", sum
    );

    return 0;
};

function newGetSum(a: number, b: number): number{

    let suma_parcial = -Infinity;
    let acarreo = -Infinity;

    while(b !== 0){
        // Calculamos la suma sin acarreo usando XOR
        suma_parcial = a ^ b;
        // Ahora el acarreo usando AND y desplazando a la izquierda
        acarreo = (a & b) << 1;
        // Procedemos a actualizar a y b para la siguiente iteración
        a = suma_parcial;
        b = acarreo;
    }

    return a;

}

function main(){
    const number_1: number = 10; //0001010
    const number_2: number = 11; //0001011   

    console.log("Exec output: ", newGetSum(number_1, number_2));
}

main();