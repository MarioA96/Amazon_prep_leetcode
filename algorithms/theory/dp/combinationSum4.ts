/*
Given an array of distinct integers nums and a target integer target, return the number of 
possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.
*/

function combinationSum4(nums: number[], target: number): number{

    let num_soluciones = 0;
    let i: number = 0;

    if(target===0){
        return 1;
    }
    
    if(target>0){
        num_soluciones = DP(nums, target, 0, i);
    }

    if(target<0){
        return 0;
    }
    console.log(num_soluciones===1?"Hay solucion":"No hay solucion");

    return 0;
}

function DP(nums: number[], target: number, M: number, i: number): number{

    if( (target-(M*nums[0]!)===0) ){
        return 1;
    }
    
    if( target-(M*nums[0]!) > 0 ){
        let result = DP(nums, target, M+1, i);
        return result;
    }

    if( (target-(M*nums[0]!)<0) ){
        return 0;
    }

    return 0;
}

function main(){

    const nums = [2];
    const target = 14;

    const output = combinationSum4(nums, target);

    console.log(output);
}

main();