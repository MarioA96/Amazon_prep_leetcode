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
        if(i===len-2 || i===len-1){
            continue;
        }
        else {
            set.add( nums[i]+nums[len-1] );
        }

        // if(len===1){
        //     set.add( nums[0] );
        // }
        // else if(nums[len-1]){
        //     set.add( nums[i]+nums[len-1] );
        // }

    }

    return set;
}

const poppedArray = (nums: number[]): number[] => {
    nums.pop();

    return nums;
}

const robber = () => {
    
    return function robberMain(nums: number[]): Set<number> {
        let len = nums.length;
        if(len===1){
            return new Set<number>().add(nums[0]);
        }

        const set2: Set<number> = combinatory(nums); // <n-1>
        const set1: Set<number> = robberMain( poppedArray(nums) ); //{n}
        const unionSet: Set<number> = set1.union(set2); //{n} U <n-1>

        return unionSet;
    }
};


function main(){
    //  1 <= nums.length <= 100
    //  0 <= nums[i] <= 400
    // const nums: number[] = [1,2,3,1];
    //  const nums: number[] = [2,1,1,2];
    const nums: number[] = [2,7,9,3,1];

    // const output: Set<number> = combinatory(nums);
    // console.log(output);
    const robberCls = robber();
    console.log( "Set: ", robberCls(nums) );
}

main();

//Automata de secuencias no deterministicas en procesos combinatorios 
// mediante computos estocasticos retroalimentables y auto incrementables