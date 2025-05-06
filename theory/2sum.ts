// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function twoSum(nums: number[], target: number): number[] {
    
    const sumArr: number[] = [];

    //Remember, we are looking for an unique solution
    //so it could be like:
    // index: 0
    // val: target - nums[0] = 9-2 = 7
    // if(storage[val){ return [index, storage[index]] }
    // else storage[nums[index]] = index
    // storage: { "7": 0 }
    // index: 1
    // val: target-nums[1] = 9-7=2
    // if(storage[nums[index]]){ return [index, storage[index]] }

    let storage: Object = {};
    for(let [index, num] of nums.entries()){
        if(storage[num] !== undefined){
            return [storage[num], index]
        }
        else {
            storage[target-num]=index;
        }
    }

    return sumArr;
}

function main(){
    const nums = [2,7,11,15];
    const target = 9;

    console.log(twoSum(nums, target));
}

main();