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
        // - Es un problema de minimos
        // dp[i] = min(1+ dp[i-moneda])
        // dp[x] es el minimo de monedas necesarias para obtener el valor
        // dp[cantidad] es el resultado final
    // 3- Usa un mapa memo[amount] para la memoization
    // 4- Crea una tabla dp[amount+1], inicializa dp[0]=0, yllena dp[i]=min(dp[i-coin_j]+1)
    // 5- Optimiza espacio usando un arreglo 1D en lugar de 2D si solo usa monedas fijas
    // 5- Simula para amount=11, coins=[1,2,5] para verificar que dp[11]=3 (5+5+1)
    const memo: Map<string,number> = new Map<string,number>();

    return function dp(coins: number[], amount: number, memo: Map<string,number>): number {
        if(amount===0){
            return 0;
        }
        if(amount<0){
            return -1;
        }
    
        if(amount in memo){
            return memo[amount];
        }
    
        minimum = Infinity;
        coins.forEach(coin => {
            let result = dp(amount-coin, )
        });
    }
};

function main(){

    const coins: number[] = [1,2,5];
    const amount: number = 11;

    const result = coinChange(coins, amount);

    console.log(result);
}

main();