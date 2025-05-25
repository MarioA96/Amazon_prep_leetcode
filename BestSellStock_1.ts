

function maxProfit(prices: number[]): number {
    
    let k: number = 1;
    let actualResult = 0;
    // const results:number[] = [];

    for(let i = 0; i<prices.length; i++){
        if(prices[i]>prices[k]) continue;

        for(let j = k; j<prices.length; j++){
            if(prices[j]>prices[i]){
                // results[i] = prices[j]-prices[i];

                if(prices[j]-prices[i] > actualResult){
                    actualResult = prices[j]-prices[i];
                }
            }
        }
        k++;
    }

    // const sol = results.length > 0 ? results.sort((a,b)=>a-b).pop() : 0;
    // return sol!;
    return actualResult;

};

function maxProfitOptimized(prices: number[]): number {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
}


function main(){

    const prices = [1,2,4,7,11];
    // const result1 = maxProfit(prices);
    // maxProfit(prices);

    const result2 = maxProfitOptimized(prices);

    // console.log(result1);
    console.log(result2);

}

main();