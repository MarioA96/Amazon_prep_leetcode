// Given an string, return the reverse version of it via iterative and recursive method


function reverseString(str: string): string { // O(n)

    const reversedString: string[] = [];
    for(let i=str.length-1; i>=0; i--){
        reversedString.push(str[i]!);
    }

    return reversedString.join("");
}

function swap(str: string): string{
    const chars = str.split("");

    let temp: string = chars[0]!;
    chars[0] = chars[1]!;
    chars[1] = temp;

    return chars.join("");
}

function reverseStringRecursive(str: string): string { // O(2^n)

    if(str.length<=1){
        return str[0]!;
    }
    else if(str.length === 2){
        return swap(str);
    }

    const str0 = str.slice(0, Math.floor(str.length/2));
    const str1 = str.slice(Math.floor(str.length/2));

    return reverseStringRecursive(str1) + reverseStringRecursive(str0);
}

function main(){
    const res_1 = reverseString("yoyo_master");
    const res_2 = reverseStringRecursive("yoyo_master");
    
    console.log(res_1);
    console.log(res_2);
}

main();