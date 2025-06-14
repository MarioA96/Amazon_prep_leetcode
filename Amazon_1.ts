


function countPossibleWinners(initialRewards:number[]): number[]{

    /*Dado un arreglo de recompensas iniciales, el objetivo es encontrar los posibles ganadores.
    Se considera que un jugador puede ganar si su recompensa inicial más el número de jugadores restantes es mayor o igual a la recompensa inicial del siguiente jugador menos la suma de los números restantes.
    La función countPossibleWinners toma un arreglo de recompensas iniciales y devuelve un arreglo con los posibles ganadores.
    La función utiliza un enfoque de programación dinámica para calcular los posibles ganadores. 
    Solo debe devolver los índices de los jugadores que pueden ganar, no el número de jugadores restantes. */
    
    const len = initialRewards.length;
    const storage = [];
    const maxNumbers = [];

    if (len === 1) return [initialRewards[0]];
    
    storage[0] = initialRewards[0];
    // for(let i=0; i<len; i++){
    //     storage[i] = initialRewards[i]+( len-i );
    // }
    for (let i = 1; i < len; i++) {
        storage[i] = Math.max(storage[i-1], initialRewards[i]);
    }
    for (let i = 1; i < len; i++) {
        // if(storage[i] > storage[i+1]-((len*(len-1)/2)-1) ){
        //     maxNumbers.push(i);
        // }
        if (storage[i] >= initialRewards[i]) {
            maxNumbers.push(i+1);
        }
    }

    return maxNumbers;
}


function main(){
    const initialRewards = [1, 3, 4];
    const result = countPossibleWinners(initialRewards);
    console.log(result); // Output: [3,4]
}

main();