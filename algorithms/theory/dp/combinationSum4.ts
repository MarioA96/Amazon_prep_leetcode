/*
Given an array of distinct integers nums and a target integer target, return the number of 
possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.
*/

function combinationSum4(nums: number[], target: number): number{

    // Memoización para guardar resultados ya calculados y evitar cálculos repetidos
    const memo: Map<number, number> = new Map<number, number>()

    function DP(t: number): number{
        // Caso base: si la suma es 0, hay una combinación válida (no tomar ningún número)
        if(t===0){
            return 1;
        }
        // Si la suma es negativa, no hay combinación posible
        if(t<0){
            return 0;
        }
        // Si ya se calculó el resultado para 't', se retorna el valor almacenado
        if(memo.has(t)){
            return memo.get(t)!;
        }

        let total = 0;
        // Para cada número en 'nums', intenta incluirlo en la combinación y suma los resultados
        for (const num of nums) {
            total += DP(t - num);
        }

        // Guarda el resultado en el memo antes de retornarlo
        memo.set(t, total);
        return total;
    }

    // Inicia el cálculo para el valor objetivo
    return DP(target); //Aplicando Closure y mas apegado a un algoritmo DP funcional
}



function main(){

    const nums = [1,2,3];
    const target = 4;

    const output = combinationSum4(nums, target);

    console.log(output);
}

main();