/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a 
space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/

function wordBreak(s: string, wordDict: string[]): boolean {
    
    if(wordDict.length < 1){
        if(s.length===0){
            return true;
        }
        else {
            return false;
        }
    }
    if(wordDict.length === 1){
        let stringResult = s.replace(wordDict[0]!, ""); 
        if(stringResult.length===0){
            return true;
        }
        else {
            return false;
        }
    }

    let minimum = Infinity;

    if(wordDict.length > 1){
        // let wordDictLeft = wordDict.slice(0, Math.ceil(wordDict.length / 2));
        // let wordDictRight = wordDict.slice(Math.ceil(wordDict.length / 2), wordDict.length);

        // console.log("left: ", wordDictLeft, ", right: ", wordDictRight);
        // let res = [
        //     wordBreak(s, wordDictLeft),
        //     wordBreak(s, wordDictRight)
        // ];
        wordDict.forEach(word => {
            
            let stringRaplaced = s.replace(word, "");
            let value = wordBreak(stringRaplaced, wordDict);
            minimum = Math.min(minimum, value);

        });
    }


    return false;
};

function main(){

    const s = "leetcode";
    const wordDict = ["leet","code"];

    const result = wordBreak(s, wordDict);

}

main();