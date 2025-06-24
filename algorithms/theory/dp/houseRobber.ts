/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is 
that adjacent houses have security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/
function combinatory(nums: number[]): Set<number>{

    let set = new Set<number>();
    const len = nums.length;

    set.add(nums[len-1]);

    for(let i=0; i<len; i++){
        if(i===len-1){
            continue;
        }

        set.add( nums[i]+nums[len-1] );
    }

    return set;
}


const robber = () => {
    
    let cache = {};

    return function robberMaster(nums: number[]): number {
        let len = nums.length;
        if(len===1){
            
        }

        return 0;
    }
};

function main(){
    //  1 <= nums.length <= 100
    //  0 <= nums[i] <= 400
    // const nums: number[] = [1,2,3,1];
     const nums: number[] = [2,1,1,2];

    const output: Set<number> = combinatory(nums);
    console.log(output);
}

main();