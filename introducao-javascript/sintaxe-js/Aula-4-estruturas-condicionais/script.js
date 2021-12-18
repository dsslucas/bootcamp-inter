//Condição if/else
var jogador1 = 1;
var jogador2 = 0;
var placar;

if (jogador1 > 0){
    console.log("Jogador 1 marcou ponto!")
}
else if (jogador2 > 0){
    console.log("Jogador 2 marcou ponto!")
}
else{
    console.log("Jogo empatado!")
}

//If Ternário
jogador1 > 0 ? console.log("Jogador 1 está ganhando") : ("Não está ganhando")

//Switch Case
switch(placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou a partida")
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou a partida")
        break;
    default:
        console.log("Jogo empatado!");

}

//Repetição 

//For
let array = [1, 2, 3, 4, 5]
let object = {
    prop1: 1,
    prop2: 2,
    prop3: 3
}

for(let i=0; i< array.length; i++){
    console.log(`Array ${i}: ${array[i]}`)
}

//For/IN executa a partie de uma propriedade
for (let i in array){
    console.log(i)
}

//For com Objeto: Exibe o nome da variável
for(i in object ){
    console.log(i)
}

//For/OF: Exibe o valor atribuido a um objeto
for (i in array){
    console.log(i)
}

//For Of Com Object: imprime o valor atribuido por linha individual
//for (i of object.prop1){
    //console.log(i)
//}

//While
var a = 0;
while(a < 10){
    a++
    console.log(`Valor de A: ${a}`)
}

//Do While: executa uma função até tal valor ser falso
var a = 0;
/*
do{
    a--;
    console.log(`Valor de A2: ${a}`);
}while(a > 0 && a == 10)
*/