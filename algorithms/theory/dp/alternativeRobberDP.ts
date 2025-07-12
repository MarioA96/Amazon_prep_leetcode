function rob(nums: number[]){

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
                        set[j][1] += keyOfMap;
                        set[j][0].add(sortedMap.get(keyOfMap).at(0));
                        condicion = false;
                    }
                    else if(!set[j+1]){ //No cumple la condicion de arriba y a parte no hay mas elementos
                        const subSetPosition = new Set<number>();
                        subSetPosition.add(sortedMap.get(keyOfMap).at(0));
                        set[j+1] = [subSetPosition, keyOfMap];
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
                            set[j][1] += keyOfMap;
                            set[j][0].add(sortedMap.get(keyOfMap).at(i));
                            condicion = false;
                        }
                        else if(!set[j+1]){ //No cumple la condicion de arriba y a parte no hay mas elementos
                            const subSetPosition = new Set<number>();
                            subSetPosition.add(sortedMap.get(keyOfMap).at(i));
                            set[j+1] = [subSetPosition, keyOfMap];
                        }

                        j++;
                    }
                }
            }

        }
    }
    // console.log(set.entries());
    // set.set([sortedMap.get(10).at(0)], 10);
    // set.set([sortedMap.get(10).at(1)], 10);
    // set.set([sortedMap.get(10).at(2)], 10);
    // const s: [[number[],number]] = [[[], 0]];
    // s[0][1] = 10;
    // s[0][0].push(sortedMap.get(10).at(0));
    // s[0][0].push(sortedMap.get(10).at(1));
    // s[0][0].push(sortedMap.get(10).at(2));

    console.table(set);
}

function main(){

    const nums: number[] = [3,6,12,7,9,11,4];
    // const nums: number[] = [6,3,10,8,2,10,3,5,10,5,3];
    rob(nums);

}

main();


// for(let i=0; i<nums.length; i++){
//     if(map[nums[i]]){
//         map[nums[i]] = [...map[nums[i]], i];
//     } else {
//         map[nums[i]] = [i];
        
//     }
// }
// console.log({...map});
    