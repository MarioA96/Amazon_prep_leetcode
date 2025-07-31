/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/


function productExceptSelfNaive(nums: number[]): number[] {
    
    const len = nums.length;
    const results: number[] = new Array<number>(len);
    results.fill(1);

    for(let i=0; i<len; i++){
        for(let j=0; j<len; j++){
            if(i!==j){
                results[i]! *= nums[j]!;
            }
        }
    }

    return results;
};

function productExceptSelf2(nums: number[]): number[]{
    const len = nums.length;
    const acumulativo1: number[] = Array<number>(len-1);
    const acumulativo2 = Array<number>(len-1);
    const results: number[] = Array<number>(len);

    //Lectura de derecha a izquierda pero haciendo que la multiplicacion mas larga este al inicio
    for(let i=len-1; i>0; i--){
        if(i===len-1){
            acumulativo1[i-1] = nums[i]!;
        } else {
            acumulativo1[i-1] = acumulativo1[i]!*nums[i]!;
        }
    }
    //Lectura de izquierda a derecha
    for(let i=0; i<len-1; i++){
        if(i===0){
            acumulativo2[i] = nums[i]!;
        } else {
            acumulativo2[i] = acumulativo2[i-1]!*nums[i]!;
        }
    }

    

    return [];
}


function main(){

    const nums:number[] = [1,2,3,4]; //[0,0,9,0,0]

    // const output1: number[] = productExceptSelfNaive(nums);
    const output2: number[] = productExceptSelf2(nums);

    // console.log(output1);

}

main();