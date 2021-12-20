//Recebe dois números como parâmetros
function igualValor(num1, num2){
    var resultadoIgualdade
    //São iguais?
    if (num1 == num2){
        var resultadoIgualdade = true
    }
    else{
        var resultadoIgualdade = false
    }
    somaValor(resultadoIgualdade, num1, num2)
}

//Soma dos números entre 10 e 20
function somaValor(resultadoIgualdade, num1, num2){
    var resultadoSoma = num1 + num2;
    var resultadoComparacao

    if(resultadoSoma > 10 && resultadoSoma < 20){
        var resultadoComparacao = true
    }

    else if(resultadoSoma > 10 && resultadoSoma > 20){
        var resultadoComparacao = true
    }

    //if(resultado < 10 && resultado < 20)
    else {
        var resultadoComparacao = false
    }

    consoleGeral(resultadoIgualdade, resultadoComparacao, resultadoSoma, num1, num2)
}

function consoleGeral(saoIguais, comparacao, resultadoSoma, num1, num2){

    //igualdade verdadeira e comparação idem
    if(saoIguais && comparacao){
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${resultadoSoma}, que é maior que 10 e menor que 20.`);
    }
    
    //Igualdade verdadeira e comparação falsa
    else if(saoIguais && !comparacao){
        console.log(`Os números ${num1} e ${num2} são iguais. Sua soma é ${resultadoSoma}, que é menor que 10 e menor que 20.`);
    }
    
    //Ambos falsos
    else if(!saoIguais && !comparacao){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultadoSoma}, que é menor que 10 e menor que 20.`);
    }

    //Não são iguais, mas entram na comparação
    else if(!saoIguais && comparacao){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultadoSoma}, que é maior que 10 e maior que 20.`);
    }
}

console.log(igualValor(10, 10))