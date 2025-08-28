/*
Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/
function robMemoization(nums: number[]): number{

    //Caso trivial
    if(nums.length===1){
        return nums[0]!;
    }

    //Caso circular, excluimos primer o ultimo elemento
    return Math.max(
        robLinear(nums, 0, nums.length-2), // Robamos casas desde 0 a n-2
        robLinear(nums, 1, nums.length-1)  // Robamos casas desde 1 a n-1
    );

    function robLinear(nums: number[], start: number, end: number): number{
        const memo: Map<number, number> = new Map<number,number>();

        function dp(i: number): number{
            //Caso base, si pasamos antes de start, no hay nada que robar
            if(i<start){
                return 0;
            }
            if(memo.has(i)){
                return memo.get(i)!;
            }

            //Opcion 1: Tomar casa i y saltar a i-2
            let take = nums[i]! + dp(i-2);
            //Opcion 2: No tomar ca i e ir a i-1
            let no_take = dp(i-1);

            let result = Math.max(take,no_take); // max(nums[i]+f(i+2), f(i+1))
            
            memo.set(i, result);
            return result;
        }

        return dp(end);
    }
}


function robTabulation(nums: number[]): number {
    
    const len = nums.length;
    
    if(len===1){
        return nums[0]!;
    }

    const case1 = robLinear(nums, 0, len-2);
    const case2 = robLinear(nums, 1, len-1);

    function robLinear(nums: number[], start: number, end: number): number{

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

    const nums:number[] = [1,2,3,1];

    let output: number = robMemoization(nums);
    console.log("Memoization result: ", output);

    output = robTabulation(nums);
    console.log("Tabulation result: ", output);

}

main();