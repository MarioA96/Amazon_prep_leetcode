function maxArea(height: number[]): number {
    //Agarrmos 2 puntos extremos
    let len = height.length;
    let maxArea = 0;
    let area = 0;

    let posI0 = 0;
    let posIF = len-1;

    let i0:number = height[posI0]!;
    let iF:number = height[posIF]!;

    let condI0 = false;
    let condIF = false;
    //Calculamos el area bXh
    let b = posIF - posI0;
    let h = 0;

    if(i0<iF){
        h = i0;
        condI0 = true;
        condIF = false;
    } else if(i0>iF){
        h = iF;
        condI0 = false;
        condIF = true;
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
    } else {
        // Sino debo buscar el numero mas grande de la izq o derecha
    }

    //FALTA CICLAR TODO EL PROCESO DE CONDICIONES HASTA QUE NO HAY MAS ELEMENTOS  Y HACER LA BUSQUEDA

    console.log(maxArea);
    return 0;
};