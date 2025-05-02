// Given an integer array nums, return all the triplets [nums[i], nums[j], 
// nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

const twoSum = (nums:number[], lenNums:number, index:number, resSum:number) => {

    for(let i=0; i<lenNums; i++){
        if(){
            continue;
        }
        else {
            let twoSum = resSum + nums[i];
        }
    }

    return [];
}

const threeSum = (nums: number[], target: number) => {

    const lenNums = nums.length;
    for(let i=0; i<lenNums; i++){
        let resSum = 0;
        resSum = target + nums[i];
        const [j, k] = twoSum(nums, lenNums, i, resSum);
    }

    return [[]];
}


function main(){
    const nums = [-1,0,1,2,-1,-4];
    const target = 0;
    const output: number[][] = threeSum(nums, target);
}

main();