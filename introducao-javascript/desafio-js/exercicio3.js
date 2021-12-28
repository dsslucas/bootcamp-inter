/**
    Entrada
    A entrada consiste de um único inteiro N (1 ≤ N ≤ 34) numa linha.

    Saída
    Imprima os N primeiros caracteres da citação de Søren Kierkegaard definida pelas letras que foram sublinhadas no enunciado deste problema. Preste atenção, pois nenhum espaço foi sublinhado — você é que deve adivinhar o número e a localização dos espaços na frase. A única linha da saída deve consistir apenas de letras maiúsculas e espaços e ser finalizada por fim de linha.
 */

let N = 5

let frase = "LIFE IS NOT A PROBLEM TO BE SOLVED"

console.log(frase.substring(0, N))
