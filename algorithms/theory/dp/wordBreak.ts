/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a 
space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

function wordBreak(s: string, wordDict: string[]): boolean {
    
    let memo: Map<number, boolean> = new Map<number, boolean>();
    let i: number = 0; // lo dejo para que se note de forma explicita debo de empezar desde un indice 0, segmento de la cadena desde 0

    let result = DP(s, wordDict, memo, i);

    return result;
};

// Forma generica de DP: f(S)=optd∈D(S)​{R(S,d)∘f(T(S,d))}
// Transformacion para el problema: f(i)=w∈Ds[i:i+∣w∣]=w​⋁​f(i+∣w∣)
function DP(s: string, wordDict: string[], memo: Map<number, boolean>, i: number): boolean{

    if(i===s.length){
        return true; // caso base
    }
    if(memo.has(i)){
        return memo.get(i)!;
    }

    for(let word of wordDict){
        // Verifica si s[i...] empieza con 'word'
        if(s.startsWith(word, i)){
            if( DP(s, wordDict, memo, i+word.length)===true ){
                memo.set(i, true);
                return true;
            }
        }
    };

    memo.set(i, false);
    return false; // ninguna opción funcionó
}

function main(){

    const s = "leetcode";
    const wordDict = ["leet","code"];

    const result = wordBreak(s, wordDict);
    console.log(result);

}

main();