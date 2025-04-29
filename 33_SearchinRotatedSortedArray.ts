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