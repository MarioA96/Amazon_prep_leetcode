function rob(nums: number[]){

    //Implementacion alternativa para la solucion del problema Robber
    const map: Map<number, number[]> = new Map<number, number[]>(); //valor: [posiciones]
    const set: Map<number[], number> = new Map<number[], number>(); //[posiciones]: suma

    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]){
            map[nums[i]] = [...map[nums[i]], i];
        } else {
            map[nums[i]] = [i];
        }
    }
    console.log(map);

}

function main(){

    // const nums: number[] = [3,6,12,7,9,11,4];
    const nums: number[] = [6,3,10,8,2,10,3,5,10,5,3];
    rob(nums);

}

main();