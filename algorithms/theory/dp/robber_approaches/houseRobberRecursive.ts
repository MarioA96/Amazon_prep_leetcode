function houseRobber() {
    //[ak, ak-1, ..., a3, a2, a1, a0] -> [a0, a1, a2, ..., ak-1, ak]
    const cache: Map<number, number[]> = new Map<number, number[]>();
    
    return function rob(nums: number[]): number{
        let len = nums.length;

        cache[0] = [nums[len-1]];
        cache[1] = [[nums[len-1]],[nums[len-2]]];
        cache[2] = [[nums[len-3]+nums[len-1]],[nums[len-2]]];
        cache[3] = [[[nums[len-4]+Number(cache[1][0])], [nums[len-4]+Number(cache[1][1])]],[cache[2]]]; //[ [a2+[2,1]], [3,2] ]

        // 1: set.add(nums[len-1]),
        // 2: set.add(nums[len-1]).add(nums[len-2]),
        // 3: set.add(nums[len-3]+nums[len-1]).add(nums[len-2])
        if(len===1){ //[len, pos]->[K, K-1]->[1,0]
            return cache[0];
        }
        else if(len===2){ //[K-1, K-2]->[2,1]
            return cache[1];
        }
        else if(len===3){ //[K-2, K-3]->[3,2]
            return cache[2];
        }
        else if(len===4){ //[K-3, K-4]->[4,3]
            return cache[3];
        }
        else {
            console.log(nums.slice(2, len));
            console.log(nums.slice(1, len));
            cache[len-1] = [
                [ [nums[0] + Number(rob(nums.slice(2, len))[0]) ], [nums[0] + Number(rob(nums.slice(2, len))[1]) ] ], //[ak]+[K-2, k-3]
                [ rob(nums.slice(1, len)) ]
            ];
            return cache[len-1];
        }
        
    }

}

function main(){
    // const nums: number[] = [3,6,12,7,9,11,4];
    // const nums: number[] = [6,3,10,8,2,10,3,5,10,5,3];
    // const nums: number[] = [1,2,3,1];
    // const nums: number[] = [2,1,1,2];
    const nums: number[] = [2,7,9,3,1];
    // const nums: number[] = [0,1,2,3];
    // const nums: number[] = [3,6,12,7,9,11,4];
    // const nums:number[] = [
    //     155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,
    //     66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,
    //     230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,
    //     217,212,241,242,157,79,133,66,36,165
    // ];
    
    const solution = houseRobber();
    console.log(solution(nums));
}

main();