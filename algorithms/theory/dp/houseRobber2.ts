/*
Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/

function rob(nums: number[]): number {
    
    const len = nums.length;
    
    if(len===1){
        return nums[0]!;
    }

    const case1 = dp(nums, 0, len-2);
    const case2 = dp(nums, 1, len-1);

    function dp(nums: number[], start: number, end: number): number{

        let prevRes_i_2 = 0;
        let prevRes_i_1 = 0;

        for(let i=start; i<end; i++){
            let take = nums[i]! + prevRes_i_2;
            let notTake = prevRes_i_1;
            let current = Math.max(take, notTake);

            prevRes_i_2 = prevRes_i_1;
            prevRes_i_1 = current;
        }

        return prevRes_i_1;
    }

    return Math.max(case1,case2);
};

function main(){

    const nums:number[] = [2,3,2];
    const output: number = rob(nums);

    console.log(output);

}

main();