function sumValuesFromMap(map: {}){
    let result = 0;

    for (const key in map) {
        result += map[key];
    }
    
    return result
}
let counter = 0;
function branch(map: {}, ref: number, acarreo: Set<number>){
    counter++;
    const mapS = {...map};

    if(mapS[ref+1]){
        delete mapS[ref+1];
    }

    if(mapS[ref+2] && mapS[ref+3]){
        const mapS1 = {...mapS};
        const mapS2 = {...mapS};

        delete mapS1[ref+2];
        delete mapS2[ref+3];

        branch(mapS1, ref+3, acarreo);
        branch(mapS2, ref+2, acarreo);
    }
    else if(mapS[ref+2]){
        branch(mapS, ref+2, acarreo);
    }
    else {
        acarreo.add( sumValuesFromMap(mapS) );
        return ;
    }

}
function robberA(nums: number[]): number {
    
    const map1 = {};
    const map2 = {};
    const acarreo: Set<number> = new Set<number>();

    for(let i=0; i<nums.length; i++){
        map1[i] = nums[i];
        map2[i] = nums[i];
    }
    delete map1[1];
    delete map2[0];

    const ref1 = 0;
    branch(map1, ref1, acarreo);

    const ref2 = 1;
    branch(map2, ref2, acarreo);

    return Math.max(...acarreo);
}

function greedyRob(nums: number[]){

    const results: Set<number> = new Set<number>();
    let sum = 0;

    //[3,6,12,7,9,11,4]
    /*
    Toma el arreglo
    recorre el arreglo arr.len-2 veces
    empieza desde elemento i=0
        si ya termino de dar la vuelta, de nuevo toma el primer elemento pero ahora empieza a sumar desde i+2
            suma los valores del arreglo solo evitando aquellos que no tengan vecinos de manera local
            es decir, si i+2, no sumes (i+2)-1, ni (i+2)+1
        si ya termino de dar la vuelta, de nuevo toma el primer elemento pero ahora empieza a sumar desde i+3
            suma los valores del arreglo solo evitando aquellos que no tengan vecinos de manera local
            es decir, si i+3, no sumes (i+3)-1, ni (i+3)+1
        si ya termino de dar la vuelta, de nuevo toma el primer elemento pero ahora empieza a sumar desde i+4
            suma los valores del arreglo solo evitando aquellos que no tengan vecinos de manera local
            es decir, si i+4, no sumes (i+4)-1, ni (i+4)+1
        ...
        si ya termino de dar la vuelta, de nuevo toma el primer elemento pero ahora empieza a sumar desde i+n
            suma los valores del arreglo solo evitando aquellos que no tengan vecinos de manera local
            es decir, si i+5, no sumes (i+n)-1, ni (i+n)+1
    */
    //[3,6,12,7,9,11,4]

    //i=0
    // j=0
    // k=0, nums[k]=3
    //[3,12,9,11,4]
    // j=1
    //[3,7,11]
    // j=2
    //[3,9,4]
    // j=3
    //[3,11]

    //i=1, 
    // j=0
    //[6,7,11]
    // j=1
    //[6,9,4]
    // j=2
    //[6,11]
    // j=3
    //[6,4]

    //i=2, 
    // j=0
    //[12,9,4]
    // j=1
    //[12,11]
    // j=2
    //[12,4]

    //i=3, 
    // j=0
    //[7,11]
    // j=1
    //[7,4]

    //i=4
    // j=0
    //[9,4]

    //i=5
    // j=0
    //[4]

    //i=6
    // j=0
    //[4]
    let len = 0;
    let k = 0
    const constraints = {
        "next": Infinity
    };
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            len = nums.length;
            k = j;
            constraints.next = Infinity;
            
            //[2,1,1,2]
            //[2,1]
            //[2,2]
            //[1,2]
            /*
            i=0
            j=0
            k=0

            next=Inf
            
            2 -> 3
            
            sum = 2+1
            */
            while(len>0){
                if(!(constraints["next"]===(k))){
                    sum += nums[k]!;
                    constraints["next"] = k+1;
                }

                k++;
                len--;
            }
        }
        results.add(sum);
    }

}

function main(){
    // const nums: number[] = [1,2,3,1];
     const nums: number[] = [2,1,1,2];
    // const nums: number[] = [2,7,9,3,1];
    // const nums: number[] = [0,1,2,3];
    // const nums:number[] = [
    //     155,44,52,58,250,225,109,118,211,73,137,96,137,89,174,
    //     66,134,26,25,205,239,85,146,73,55,6,122,196,128,50,61,
    //     230,94,208,46,243,105,81,157,89,205,78,249,203,238,239,
    //     217,212,241,242,157,79,133,66,36,165
    // ]

    // console.log(nums.length);
    // const result:number = robberA(nums);
    // console.log(result);
    // console.log(counter);

    let len = nums.length;
    const constraints = {};
    let sum = 0;
    let k = 0;
    for(let j=0; j<nums.length; j++){
        len = nums.length;
        k=0;
        sum=0;
        while(len>0){
            console.log("constraints.next= ", constraints.next, ", k+j: ", k+j);

            if( constraints[k] ){
                sum += nums[k]!;
                constraints["next"] = (k+j)+1;
                console.log("nums[",k,"]: ", nums[k], ", sum: ", sum);
            }
    
            k++;
            len--;
        }
        console.log("sum: ", sum, "\n");
    }
}

main();