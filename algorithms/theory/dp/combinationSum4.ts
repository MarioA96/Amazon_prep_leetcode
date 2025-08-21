/*
Given an array of distinct integers nums and a target integer target, return the number of 
possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.
*/

function combinationSum4(nums: number[], target: number): number{

    const memo: Map<number, number> = new Map<number, number>()

    function DP(t: number): number{
        if(t===0){
            return 1;
        }
        if(t<0){
            return 0;
        }
        if(memo.has(t)){
            return memo.get(t)!;
        }

        let total = 0;
        for (const num of nums) {
            total += DP(t - num);
        }

        memo.set(t, total);
        return total;
    }

    return DP(target); //Aplicando Closure y mas apegado a un algoritmo DP funcional
}



function main(){

    const nums = [1,2,3];
    const target = 4;

    const output = combinationSum4(nums, target);

    console.log(output);
}

main();