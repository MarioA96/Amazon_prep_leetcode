/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

function climbStairsRecursive(n: number): number {
    
    if(n<=3){
        return n;
    }
    else{
        return climbStairsRecursive(n-1) + climbStairsRecursive(n-2);
    }

};

function climbStairsMemoized() {

    const state: Map<number, number> = new Map<number, number>();

    return function closure(n:number): number{
        if(n in state){
            return state[n];
        } else {
            if(n<=3){
                return n;
            } else {
                state[n] = closure(n-1)+closure(n-2);
                return state[n];
            }
        }
    }

}

function climbStairsBottomUp(n:number): number{

    let current = [1,2,3];
    if(n<=3){
        return n;
    }
    for(let i=3; i<n; i++){
        current.push( current[i-1]!+current[i-2]! );
    }

    return current.pop()!;
}

function main(){

    const numberStairs = 40;
    // console.log(result);

    // const result = climbStairsRecursive(numberStairs);
    // const memo = climbStairsMemoized();
    // console.log(memo(numberStairs));

    const result = climbStairsBottomUp(numberStairs);
    console.log(result);
}

main();