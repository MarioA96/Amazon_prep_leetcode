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

    const map: Map<number, number[]> = new Map<number, number[]>();
    if(nums.length===2){
        if(nums[0]!>nums[1]!){
            map.set(0, [ nums[0]!] );
            map.set(1, [ nums[1]!] );
        }else {
            map.set(0, [ nums[0]!, nums[1]! ]);
        }
    }

    for(let i=0; i<stackedNums.length; i++){
        map.forEach((value: number[], key: number) => {
            let poppedStacked = stackedNums.pop();
            let poppedValue = value.pop();

            if(poppedStacked! < value.pop()!){
                value.push(poppedStacked!);
            } else if(poppedStacked! > poppedValue!){
                map.set();
            }
        });
    }

    return 0;
}

function main(){

    const nums = [10,9,2,5,3,7,101,18];
    const result = lengthOfLIS2(nums);

    console.log(result);

}

main();