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

function main(){

    const nums = [10,9,2,5,3,7,101,18];
    const result = lengthOfLIS(nums);

    console.log(result);

}

main();