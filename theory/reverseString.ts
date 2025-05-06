// Create a fucntion that reverses a string:
// 'Hi My name is Mario' shoudl be:
// 'oiraM si eman yM iH'

function reverse(str: string){

    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Input not valid (it should be a string or at least have 2 chars)';
    }

    // let tempArray: string[];
    let backwards: string[] = [];

    // tempArray = str.split(''); // we can avoid this since we are in TS/JS

    for(let i=str.length-1; i>=0; i--){
        // backwards.push(tempArray[i]);
        backwards.push(str[i]);
    }

    return backwards.join('');
}

function reverse2(str){
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');

function main(){
    let str = "Hi My name is Mario";
    // reverse(str);
    // console.log(reverse(str));
    // console.log(reverse2(str));
    console.log(reverse3(str));
}

main();