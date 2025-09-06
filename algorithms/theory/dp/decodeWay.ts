/*
Given a string s containing only digits, return the number of ways to decode it. 
If the entire string cannot be decoded in any valid way, return 0.

The test cases are generated so that the answer fits in a 32-bit integer.
*/

function numDecodings(s: string): number {
    
    const n = s.length;
    const memo: Map<number, number> = new Map<number,number>();

    function dp(i: number): number{

        if(i===n){
            return 1;
        }
        if(memo.has(i)){
            return memo.get(i)!;
        }

        if(s[i]==='0'){
            return 0;
        }

        let ways = dp(i+1);

        if( ((i+1)<n) && (s[i]==='1' || (s[i]==='2'&&s[i+1]!<='6'))  ){
            ways += dp(i+2);
        }

        memo.set(i, ways);
        return ways;

    }

    return dp(0);
};

function numDecodings_tab(s: string): number{

    const n = s.length;
    let dp = new Array<number>(n+1);
    dp.fill(0);

    // Caso base: string vacío se decodifica de 1 manera (trivial)
    dp[n] = 1;

    // Recorremos desde el final hacia el inicio
    for(let i=n-1; i>=0; i--){
        if(s[i] !== '0'){
            // Tomar 1 digito
            dp[i]! += dp[i+1]!;

            // Tomamos 2 digitos
            if( ((i+1)<n) && (s[i]==='1' || (s[i]==='2'&&s[i+1]!<='6'))  ){
                dp[i]! += dp[i+2]!;
            }
        }
    }

    return dp[0]!
}

function main(){
    const word: string = "2611055971756562";
    let output: number = numDecodings(word); //4 no 2
    output = numDecodings_tab(word);

    console.log(output);
};

main();