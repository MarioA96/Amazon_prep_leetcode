function reverseString(str: string) {

}

function swap(str: string): string{
    const chars = str.split("");

    let temp: string = chars[0]!;
    chars[0] = chars[1]!;
    chars[1] = temp;

    return chars.join("");
}

function reverseStringRecursive(str: string): string {

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
    // reverseString("yoyo master");
    const res = reverseStringRecursive("yoyo master");
    console.log(res);
}

main();