/*
    Entrada
    A entrada consiste de uma linha com quatro números inteiros T1, T2, T3, T4, indicando o número de tomadas de cada uma das quatro réguas (2 ≤ Ti ≤ 6).

    Saída
    Seu programa deve produzir uma única linha contendo um único número inteiro, indicando o número máximo de aparelhos que podem ser conectados à energia num mesmo instante.
*/

let t1 = 6
let t2 = 5
let t3 = 4
let t4 = 3

let resultado = t1 + (t2 - 1) + (t3 - 1) + (t4 - 1)

console.log(resultado)