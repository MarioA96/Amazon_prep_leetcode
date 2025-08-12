/*
You are given an integer array coins representing coins of different 
    denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.
*/

function coinChange(coins: number[], amount: number): number {
    
    // 1- El problema nos pide el minimo numero de monedas para dada una cantidad, lo que sugiere "optimizacion"
    // 2- Nos fijamos en la relacion recursiva: dp(amount) = min( dp(amount - coin_i) +1 ) para cada moneda coin_i
    // 3- Usa un mapa memo[amount] para la memoization
    // 4- Crea una tabla dp[amount+1], inicializa dp[0]=0, yllena dp[i]=min(dp[i-coin_j]+1)

    return -1;
};

function main(){

    const coins: number[] = [1,2,5];
    const amount: number = 11;

    const result = coinChange(coins, amount);

    console.log(result);
}

main();