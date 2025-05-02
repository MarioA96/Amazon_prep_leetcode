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

const twoSum = (nums:number[], target: number, skipedIndex: number) => {

    const len: number = nums.length;
    let sols: number[][] = [[0,0]];
    // let n:number = 0;
    sols.pop();

    for (let i = skipedIndex; i<len; i++) {
        let res = nums[i];
        for(let j = 0; j<len; j++){
            if(nums[j]===nums[i]) break;
            
            if(nums[j]+res===target){
                let sol = [ nums[i], nums[j] ];
                sols.push( sol );
                // ++n;
            }
        }
    }

    return sols;
}

const threeSum = (nums: number[], target: number) => {

    const len: number = nums.length;
    let sols: number[][] = [[0,0]];
    let n:number = 0;
    sols.pop();

    for(let i=0; i<len; i++){
        let resSum = nums[i];
        let sol2Sum: number[][] = twoSum(nums, -resSum, i+1);
        // console.log(sol2Sum.length);

        if(sol2Sum.length !== 0){
            for(let r=0; r<sol2Sum.length; r++){
                sol2Sum[r].push(resSum);
                sols.push(sol2Sum[r]);
            }
        }
        else {
            break;
        }
    }

    return sols;
}


function main(){
    const nums = [-1,0,1,2,-1,-4];
    const target = 0;
    // const output: number[][] = twoSum(nums, 1, 1);
    const output: number[][] = threeSum(nums, target);
    console.log("Soluciones: ", output);
}

main();