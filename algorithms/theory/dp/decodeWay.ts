/*
Given a string s containing only digits, return the number of ways to decode it. 
If the entire string cannot be decoded in any valid way, return 0.

The test cases are generated so that the answer fits in a 32-bit integer.
*/

function numDecodings(s: string): number {
    
    if(s.length===1){
        if(s[0]! ==='0') return 0;
        else return 1;
    }
    if(s.length===2){
        if(s[0] === '0') return 0;
        if(Number(s[0]) > 2) return 1;
        if(s[0] === '1'){
            if(s[1] === '0') return 1;
            if(Number(s[1]) > 0) return 2;
        }
        if(s[0] === '2'){
            if(s[1] === '0') return 1;
            if(Number(s[1])>=1 && Number(s[1])<=6) return 2;
            if(Number(s[1])>6) return 1;
        }
    }

    return 0;
};

function main(){
    const word: string = "10";
    const output: number = numDecodings(word);

    console.log(output);
};

main();