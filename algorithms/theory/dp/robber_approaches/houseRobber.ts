/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, 
the only constraint stopping you from robbing each of them is 
that adjacent houses have security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/

// Function to calculate non-combinatory but linear sums over nums
// Iterative simple
var rob = function(nums) {
    
    let sums = [];
    let partial = 0;
    let index = 0;

    while(nums.length > 0){
        if(nums[index]){
            partial += nums[index];
            index += 2;
        } else {
            sums.push(partial);
            partial = 0;
            nums.shift();
            index = 0;
        }
    }

    let max = -Infinity;

    for(let i=0; i<sums.length; i++){
        if(sums[i] > max){
            max = sums[i];
        }
    }

    return max;
};

//----------------------------------------------------------
//Set iterative simple
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
//-----------------------------------------------------------------
function sumValuesFromMap(map: {}){
    let result = 0;

    for (const key in map) {
        result += map[key];
    }
    
    // console.log("MapSumValues: ", map);
    // console.log("Result: ", result);
    return result
}
function branch(map: {}, ref: number, acarreo: Set<number>){
    // console.log("Map: ", map, ", ref: ", ref, ", acarreo: ", acarreo);
    const mapS = {...map};

    if(mapS[ref+1]){
        delete mapS[ref+1];
    }

    if(mapS[ref+2] && mapS[ref+3]){
        const mapS1 = {...mapS};
        const mapS2 = {...mapS};

        delete mapS1[ref+2];
        delete mapS2[ref+3];

        branch(mapS1, ref+3, acarreo);
        branch(mapS2, ref+2, acarreo);
    }
    else if(mapS[ref+2]){
        branch(mapS, ref+2, acarreo);
    }
    else {
        acarreo.add( sumValuesFromMap(mapS) );
        return ;
    }

}

function robberA(nums: number[]): number {
    
    const map1 = {};
    const map2 = {};
    const acarreo: Set<number> = new Set<number>();

    for(let i=0; i<nums.length; i++){
        map1[i] = nums[i]; // Converting array to hashtable, Ai: ai
        map2[i] = nums[i]; // Converting array to hashtable, Ai: ai
    }
    delete map1[1];
    delete map2[0];
    // console.log("Maps: ",map1,map2);

    const ref1 = 0;
    branch(map1, ref1, acarreo);

    const ref2 = 1;
    branch(map2, ref2, acarreo);

    // console.log("Acarreo final: ", acarreo);
    // console.log(Math.max(...acarreo));
    return Math.max(...acarreo);
}

function main(){
    //  1 <= nums.length <= 100
    //  0 <= nums[i] <= 400
    // const nums: number[] = [1,2,3,1];
    //  const nums: number[] = [2,1,1,2];
    // const nums: number[] = [2,7,9,3,1];
    // const nums: number[] = [0,1,2,3];
    const nums:number[] = [
        155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,
        66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,
        230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,
        217,212,241,242,157,79,133,66,36,165
    ]

    // const output: Set<number> = combinatory(nums);
    // console.log(output);
    // const robberCls = robber();
    // console.log( "Set: ", robberCls(nums) );

    const result:number = robberA(nums);
    console.log(result);
}

main();

//Automata de secuencias no deterministicas en procesos combinatorios 
// mediante computos estocasticos retroalimentables y auto incrementables