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
    // Hacemos el producto en el nuevo arreglo de manera cruzada con los resultados previos
    for(let i=0; i<len; i++){
        if(i===0){
            results[i] = acumulativo1[i]!;
        } else if(i===len-1){
            results[i] = acumulativo2[i-1]!
        } else {
            results[i] = acumulativo1[i]! * acumulativo2[i-1]!;
        }
    }

    //O(3n)->O(n)
    return results;
}

//Alternative implementation suggested approach to save memory in both Time complexity and Espace
function productExceptSelfBest(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array(n).fill(1);

    // Primera pasada: productos de izquierda
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // Segunda pasada: multiplicar por productos de derecha
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * right;
        right *= nums[i];
    }

    return result;
}


function main(){

    const nums:number[] = [-1,1,0,-3,3]; //[0,0,9,0,0]

    // const output1: number[] = productExceptSelfNaive(nums);
    const output: number[] = productExceptSelfBest(nums);

    console.log(output);

}

main();