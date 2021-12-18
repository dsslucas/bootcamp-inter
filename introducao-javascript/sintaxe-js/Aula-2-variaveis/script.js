//Tipos Primitivos

//Booleano
var VouF = false;
console.log(typeof(VouF));

//Number
var numero = 1;
console.log(typeof(numero));

//String
var nome = "Lucas";
console.log(typeof(nome))

//Função
var funcao = function () {}
console.log(typeof(funcao));

//Declaração de variáveis
var variavel = "Lucas"
console.log(variavel)

var variavel2 = "Florentina"
console.log(variavel2)

//Escopo
var escopoGlobal ="global";
console.log(escopoGlobal);
function escopoLocalInterno(){
    let escopoLocal = 'local'
    console.log(escopoLocal)
}

escopoLocalInterno()

//Atribuições
var atribuicao = "Lucas"

//Comparação
var comparacao = 0 == 0
console.log(comparacao)

//Comparacao Identica
var compIdentica = "0" === 0
console.log(compIdentica)

//Aritmética

// adição
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 2 - 1;
console.log(subtracao);

//multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);

//divisão real
var divisaoReal = 6 / 2;
console.log(divisaoReal);

//divisão inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);;

//potenciação
var potenciacao = 2**10;
console.log(potenciacao);


// operadores relacionais
// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor que
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou igual a
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);


// operadores lógicos
// && - todos os valores devem ser true
var e = true && true;
console.log(e);

// || - somente um valor deve ser true
var ou = true || false;
console.log(ou);

// ! - inverte os valores
var nao = !true;
console.log(nao);

