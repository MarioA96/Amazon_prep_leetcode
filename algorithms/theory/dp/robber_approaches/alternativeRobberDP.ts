function rob(nums: number[]): number{

    //Implementacion alternativa para la solucion del problema Robber
    const map: Map<number, number[]> = new Map<number, number[]>(); //valor: [posiciones]
    const set: [Set<number>, number][] = [[new Set<number>(), 0]]; //[posiciones]: suma

    for(let i=0; i<nums.length; i++){
        if(map.get(nums[i])){
            map.get(nums[i])?.push(i);
        }
        else {
            map.set(nums[i], [i]);
        }
    }
    const mappedEntries = [...map.entries()];
    const sortedEntries = mappedEntries.sort((a, b) => b[0] - a[0]);
    const sortedMap = new Map(sortedEntries);

    for (const keyOfMap of sortedMap.keys()) {
        if(sortedMap.get(keyOfMap)!.length===1){
            if(set[0][0].size===0){
                set[0][1] = keyOfMap;
                set[0][0].add(sortedMap.get(keyOfMap).at(0));
            }
            else {
                let j:number = 0;
                let condicion: boolean = true;

                while(condicion && j<set.length){
                    if(!set[j][0].has(sortedMap.get(keyOfMap).at(0)-1) && !set[j][0].has(sortedMap.get(keyOfMap).at(0)+1)){
                        set[j][0].add(sortedMap.get(keyOfMap).at(0));
                        set[j][1] += keyOfMap;
                        condicion = false;
                    }
                    else if(!set[j+1]){ //No cumple la condicion de arriba y a parte no hay mas elementos
                        const subSetPosition = new Set<number>();
                        subSetPosition.add(sortedMap.get(keyOfMap).at(0));
                        set[j+1] = [subSetPosition, keyOfMap];
                        condicion = false;
                    }

                    j++;
                }
            }
        } 
        else{
            const len = sortedMap.get(keyOfMap)!.length;

            for(let i=0; i<len; i++){
                if(set[0][0].size===0){
                    set[0][1] = keyOfMap;
                    set[0][0].add(sortedMap.get(keyOfMap).at(i));
                }
                else {
                    let j:number = 0;
                    let condicion: boolean = true;

                    while(condicion && j<set.length){
                        if(!set[j][0].has(sortedMap.get(keyOfMap).at(i)-1) && !set[j][0].has(sortedMap.get(keyOfMap).at(i)+1)){
                            set[j][0].add(sortedMap.get(keyOfMap).at(i));
                            set[j][1] += keyOfMap;
                            condicion = false;
                        }
                        else if(!set[j+1]){ //No cumple la condicion de arriba y a parte no hay mas elementos
                            const subSetPosition = new Set<number>();
                            subSetPosition.add(sortedMap.get(keyOfMap).at(i));
                            set[j+1] = [subSetPosition, keyOfMap];
                            condicion = false;
                        }

                        j++;
                    }
                }
            }

        }
    }

    const arraySols:number[] = [];
    set.forEach((e)=>{
        arraySols.push(e[1]);
    });

    return Math.max(...arraySols);
}

function main(){

    // const nums: number[] = [3,6,12,7,9,11,4];
    // const nums: number[] = [6,3,10,8,2,10,3,5,10,5,3];
    // const nums: number[] = [1,2,3,1];
    // const nums: number[] = [2,1,1,2];
    // const nums: number[] = [2,7,9,3,1];
    // const nums: number[] = [0,1,2,3];
    // const nums: number[] = [3,6,12,7,9,11,4];
    const nums:number[] = [
        155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,
        66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,
        230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,
        217,212,241,242,157,79,133,66,36,165
    ]
    const solution: number = rob(nums);
    console.log(solution)
}

main();
    