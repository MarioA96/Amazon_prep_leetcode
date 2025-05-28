// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Divide and conquer approach
// 	Dynamic Programming
// 		Kaenes Algorithm
// 			https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d

function maxSubArray(nums: number[]): number {
    /*
    //While(len(S))
    //Primero calculo la suma de elementos, guardo el resultado en un hash
    //Luego quito el elemento mas pequeno del arreglo, este creara 2 arreglos nuevos
    //El primer arregglo de izq y el segundo de derecha, seran temporales en el calculo
    //Tal que, S=[-2,1,-3,4,-1,2,1,-5,4], A=[-2,1,-3,4,-1,2,1], B=[4]
    //Luego, como len(B)=1, guardo su valor en map{ 2:0, 4:1 }
    //Entonces calculo Sum(A)=3, guardo el resultado, map{ 2:0, 4:1, 3:2 }
    //Como len(A)>1, continuo
    //Quito de A, el prime elemento mas pequeno
    */
    let local_max = nums[0];
    let global_max = nums[0];

    for(let i=1; i<nums.length; i++){
        local_max=( nums[i] > (nums[i]+local_max) ? nums[i] : nums[i]+local_max );
        if(local_max>global_max){
            global_max=local_max;
        }
    }
    
    return global_max;
};

function main(){
    const nums: number[] = [-2,1,-3,4,-1,2,1,-5,4];
    const output: number = maxSubArray(nums);

    console.log("Output", output);
};

main();