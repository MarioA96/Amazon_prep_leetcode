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

// const threeSum = (nums: number[]): number[][] => {

//     let sols: number[][] = [];

//     for(let i=0; i<nums.length; i++){
//         let resSum = nums[i];
//         let sol2Sum: number[][] = twoSum(nums, -resSum, i+1);

//         if(sol2Sum.length !== 0){
//             for(let r=0; r<sol2Sum.length; r++){
//                 sol2Sum[r].push(resSum);
//                 sols.push(sol2Sum[r]); 
//             }
//         }
//     }

//     return sols;
// }

// const twoSum = (nums:number[], target: number, skipedIndex: number) => {

//     const len: number = nums.length;
//     let sols: number[][] = [];

//     for (let i = skipedIndex; i<len; i++) {
//         let res = nums[i];
//         for(let j = 0; j<len; j++){
//             if(nums[j]===nums[i]) break;
            
//             if(nums[j]+res===target){
//                 let sol = [ nums[i], nums[j] ];
//                 sols.push( sol );
//             }
//         }
//     }

//     return sols;
// }

const twoSum = (nums: number[], target: number, skippedIndex: number): number[][] => {

    const sols: number[][] = [];
    const map: { [key: number]: number } = {};
    
    for (let i = skippedIndex; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (complement in map) {
            const j = map[complement];
            sols.push([j, i]); // Store indices of the pair
        }
        map[nums[i]] = i;
    }
    
    return sols;
}

function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const seen = new Set<string>(); // To track unique triplets
    
    // Sort array to handle duplicates and ensure consistent triplet order
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        // Solve twoSum for target = -nums[i]
        const target = -nums[i];
        const twoSumResult = twoSum(nums, target, i+1);
        
        // Add valid triplets to result
        for (const [j, k] of twoSumResult) {
            const triplet = [nums[i], nums[j], nums[k]];
            const tripletKey = triplet.join(','); // Unique key for triplet
            if (!seen.has(tripletKey)) {
                result.push(triplet);
                seen.add(tripletKey);
            }
        }
    }
    
    return result;
}


function main(){
    const nums = [-1,0,1,2,-1,-4];
    const target = 0;
    // const output: number[][] = twoSum(nums, 1, 1);
    const output: number[][] = threeSum(nums);
    console.log("Soluciones: ", output);
}

main();