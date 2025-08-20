/*
Given an array of distinct integers nums and a target integer target, return the number of 
possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.
*/

function combinationSum4(nums: number[], target: number): number{

    let i: number = 0;
    const memo: Map<number, number> = new Map<number, number>()

    if(target===0){
        return 1;
    }
    if(target<0){
        return 0;
    }
    if(target>0){
        DP(nums, target, memo, i);
    }

    return memo.size;
}

function DP(nums: number[], target: number, memo: Map<number,number>, i: number): number{

    if(memo.has(i)){
        return memo.get(i)!;
    }
    
    for(i=0; i<nums.length; i++){
        target = target - nums[i]!;

        if(target<0){
            return 0;
        }
        if(target===0){
            memo.set(i,1);
            return 1;
        }
        if( target>0 ){
            DP(nums, target, memo, i);
        }
    }

    return 0;
}

function main(){

    const nums = [1,2,3];
    const target = 7;

    const output = combinationSum4(nums, target);

    console.log(output);
}

main();