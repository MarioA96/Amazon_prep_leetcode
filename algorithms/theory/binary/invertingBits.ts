function reverseBits(n: number): number {
    
    let tempVar = 0;
    let result = 0;

    /*
    En lugar de depender de n !== 0 en el bucle, usamos un bucle fijo de 32 iteraciones (for (let i = 0; i < 32; i++)). 
    Esto garantiza que incluso si n tiene menos de 32 bits, el resultado se rellena con ceros a la izquierda.
    */
    for (let i = 0; i < 32; i++) {
        tempVar = n & 1;
        n = n >>> 1;
        if(result === 0){
            result = tempVar;
        } else {
            result = (result << 1) | tempVar;
        }
    }

    return result;
};

function main(){

    const n = 43261596; // 00000010100101000001111010011100 -> 964176192
    // const n = 77; // 89
    const output = reverseBits(n);

    console.log(output);

}

main();