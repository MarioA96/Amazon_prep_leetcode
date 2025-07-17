

function houseRobber(): void {
    //[ak, ak-1, ..., a3, a2, a1, a0] -> [a0, a1, a2, ..., ak-1, ak]
    const cache = {}
    
    return function rob(nums: number[]): number{
        let len = nums.length;
        // 1: set.add(nums[len-1]),
        // 2: set.add(nums[len-1]).add(nums[len-2]),
        // 3: set.add(nums[len-3]+nums[len-1]).add(nums[len-2])
        if(len in cache){
            return cache[len];
        }else {
            if(len===3){
                cache[3] = nums[len-3]
                return len;
            } else {
                cache[len] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }

}

function main(){
    // const nums: number[] = [3,6,12,7,9,11,4];
    // const nums: number[] = [6,3,10,8,2,10,3,5,10,5,3];
    // const nums: number[] = [1,2,3,1];
    // const nums: number[] = [2,1,1,2];
    // const nums: number[] = [2,7,9,3,1];
    // const nums: number[] = [0,1,2,3];
    // const nums: number[] = [3,6,12,7,9,11,4];
    const nums:number[] = [
        155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,
        66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,
        230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,
        217,212,241,242,157,79,133,66,36,165
    ];
    
    const solution: number = houseRobber(nums);
    console.log(solution);
}

main();