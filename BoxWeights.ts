// Find a subset A of S such as A, B are subsets of S, A satisfies Max(Sum(A)) -> A:||A||min & Sum(A) > Sum(B)

function minimalHeaviestSetA(arr) {
    // Write your code here
    
    //We calculate the max result posible given the 2 sets
    const totalSetsSum = arr.reduce((sum, num) => sum + num, 0);
    
    // We sort the array
    arr.sort( function(a,b){ return b-a } );

    // let maxLengthSubset = Math.floor(arr.length/2);
    
    let subSetA=[];
    // let subSetB=[];
    let minLength = Infinity;
    let maxLength = -Infinity;
    
    let sumASubset = 0;
    for(let i=0; i<arr.length; i++){
        sumASubset += arr[i];
        const len = i+1;
        
        if(sumASubset > totalSetsSum-sumASubset){
            if(len <= minLength && sumASubset > maxLength){
                minLength = len;
                maxLength = sumASubset;
                subSetA = arr.slice(0, len)
            }
        }
    }
    return subSetA.sort(function(a,b){ return a-b });
    
    // while(maxLengthSubset>2){
    //     // We extract the subset with more weight values
    //     arr.slice(0,maxLengthSubset); 
        
    //     maxLengthSubset = Math.floor(arr.length/2)
    // }
    
}