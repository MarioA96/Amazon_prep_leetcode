/*
Given an integer array nums, return the length of the longest strictly increasing subsequences.
*/

function lengthOfLIS(nums: number[]): number[] {
    
    let len = nums.length;

    if(len===1){
        return nums;
    }
    if(len===2){
        if(nums[0]!<nums[1]!){ // Envio ambos elementos   
            return nums;
        }
        else { //Envio el arreglo con el elemento mas pequeno
            const el = nums.pop();
            nums[0] = el!;
            return nums;
        }
    }

    const left = nums.slice(0, Math.ceil(len/2));
    const right = nums.slice(Math.ceil(len/2), len);

    return lengthSub(
        lengthOfLIS(left),
        lengthOfLIS(right)
    );

};

function lengthSub(leftArr: number[], rightArr: number[]): number[]{

    let lenLeftArr = leftArr.length;
    let lenRightArr = rightArr.length;

    console.log("left: ", leftArr, ", right: ", rightArr);
    
    while(lenLeftArr>0 && lenRightArr){

    }
    
    return leftArr.concat(rightArr);
}

function lengthOfLIS2(nums: number[]): number{

    const stackedNums: number[] = [];
    const len = nums.length;

    for(let i=0; i<len; i++){
        if(nums.length>=3){
            let el: number[] = nums.slice(0, 1);
            let poppedEl = el.pop();
            nums.splice(0,1);
            stackedNums.push(poppedEl!);
        }
    }
    console.log(stackedNums);

    const map: Map<number, number[]> = new Map<number, number[]>();
    if(nums.length===2){
        if(nums[0]!>nums[1]!){
            map.set(0, [ nums[0]!] );
            map.set(1, [ nums[1]!] );
        }else {
            map.set(0, [ nums[0]!, nums[1]! ]);
        }
    }

    let lenStacked = stackedNums.length; //?
    let wasPoppedStacked = false;

    for(let i=0; i<lenStacked; i++){  //?
        wasPoppedStacked = false;
        let poppedStacked = stackedNums.pop();

        //TODO check wheter or not next element in stack in being set
        map.forEach((value: number[]) => {
            let poppedValue = value[ value.length-1 ];

            if(poppedStacked! < poppedValue!){
                value.push(poppedStacked!);
                wasPoppedStacked = true;
            } else if(poppedStacked! > poppedValue!){
                wasPoppedStacked = false;
            }
        });

        //TODO is not added the new key in map
        if(!wasPoppedStacked){
            // console.log("entra: ", poppedStacked);
            let len = map.size;
            map.set(len-1, [poppedStacked]);
            // console.log(map);
        }
    }
    // console.log(map);

    // return map.get(0)?.length!;
    return 0;
}

const f = (index: number, prev_index: number, nums: number[], n: number): number => {

    if(index===n) return 0;

    let len = 0+f(index+1, prev_index, nums, n);
    if(prev_index === -1 || nums[index]! > nums[prev_index]!){
        len = Math.max( len, 1+f(index+1, index, nums, n) );
    }

    return len;
}

function lengthOfLIS3(nums: number[]){


    return f(0, -1, nums, nums[nums.length-1]!);
}

function main(){

    const nums = [10,9,2,5,3,7,101,18];
    // const nums = [7,7,7,7,7,7,7];
    // const nums = [0,1,0,3,2,3];
    const result = lengthOfLIS3(nums);

    console.log(result);

}

main();