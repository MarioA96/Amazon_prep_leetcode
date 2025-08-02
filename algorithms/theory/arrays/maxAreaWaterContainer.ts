function maxArea(height: number[]): number {
    //Agarrmos 2 puntos extremos
    let len = height.length;
    let maxArea = 0;
    let area = 0;

    let posI0 = 0;
    let posIF = len-1;

    let i0 = 0;
    let iF = 0;

    let condI0 = false;
    let condIF = false;
    //Calculamos el area bXh
    let b = 0;
    let h = 0;

    let areMoreMaxArea = true;

    while( (posI0 !== posIF) && areMoreMaxArea){
        i0 = height[posI0]!;
        iF = height[posIF]!;
        b = posIF - posI0;

        // console.log("b: ", b, ", posI0: ", posI0, ", posIF: ", posIF);

        if(i0<iF){
            h = i0;
            condI0 = true; //Si puntero inicial es menor que puntero final
            condIF = false;
        } else if(i0>iF){
            h = iF;
            condI0 = false;
            condIF = true;  //Si puntero final es menor que puntero inicial
        } else {
            //Da igual pues tienen el mismo tamano
            h = i0;
            condI0 = false;
            condIF = false;
        }

        area = b*h;

        if(maxArea === 0){
            maxArea = area; 
        } else if(maxArea < area){
            maxArea = area;
        } else if(maxArea >= area){
            maxArea;
        }

        if(condI0){ // Si el el valor del puntero1 es menor que valor del puntero2
            // Muevo el puntero1
            posI0++;
        } else if(condIF){
            // Sino muevo el puntero2
            posIF--;
        } else if(!condI0 && !condIF){
            // Sino debo buscar el numero mas grande de la izq o derecha
            let condBusqueda = true;
            let tempBase = 0;
            let noMoreElements = false;

            while(condBusqueda && !noMoreElements){
                if(height[posI0]! > height[posIF]!){
                    posI0++;
                    condBusqueda = false;
                } else if(height[posI0]! < height[posIF]!){
                    posIF--;
                    condBusqueda = false;
                } else if(height[posI0]! === height[posIF]!){
                    posI0++;
                    posIF--;
                    tempBase = posIF - posI0;
                    if(tempBase <= 0){
                        noMoreElements = true;
                        areMoreMaxArea = false;
                    } else {
                        condBusqueda = false;
                    }
                }
            }
        }

        // console.log(maxArea);
    }

    
    return maxArea;
};

function main(){

    // const input:number[] = [1,8,6,2,5,4,8,3,7]; // 49
    const input:number[] = [1,3,2,5,25,24,5]; // 24
    // const input:number[] = [1,1]; // 1
    const output:number = maxArea(input);

    console.log(output);

}

main();