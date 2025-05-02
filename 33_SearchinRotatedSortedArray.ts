function search(nums: number[], target: number): number {
    let found = false;
    let  n = -1;
    let i = 0;
    let l = nums.length;

    while(l>0 && !found){
        if(nums[i]===target){
            found=true;
            n=i;
            l=0
        }
        else{
            ++i;
            --l;
        }
    }

    return n;
};

function main(){
    const nums = [4,5,6,7,0,1,2];
    const target = 0;

    const n = search(nums, target);
    console.log("Searched number: ", n);
}

main();