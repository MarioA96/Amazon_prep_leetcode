function hammingWeight(n: number): number {
    
    let counter = 0;

    while(n !== 0){
        if ((n & 1) === 1) {
            counter++;
        }
        n = n >> 1;
    }

    return counter;
};

function main(){

    const input: number = 2147483645;
    console.log(hammingWeight(input));

}

main();