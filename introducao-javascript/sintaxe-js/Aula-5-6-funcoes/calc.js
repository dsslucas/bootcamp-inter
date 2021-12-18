function calculadora() {
    const operacao = prompt(`
        Informe a operação desejada:
        1 - Soma (+)
        2 - Subtração (-)
        3 - Multiplicação (*)
        4 - Divisão real (/)
        5 - Divisão inteira (%)
        6 - Potenciação (**)
    `);

     //Operador
     switch (operacao) {
        case "+":
            soma();
            break;
        case "-":
            subtracao();
            break;
        case "*":
            multiplicacao();
            break;
        case "/":
            divisaoReal();
            break;
        case "%":
            divisaoInteira();
            break;
        case "**":
            potenciacao();
            break;
        default:
            alert("Operação inválida!")
            calculadora();
    }

    //Variáveis para coletar valores
    //Number converte string para número
    let n1 = Number(prompt("Insira o primeiro valor:"))
    let n2 = Number(prompt("Insira o segundo valor:"))
    let resultado;

    //Verifica se é número ou string
    if (!n1 || !n2) {
        alert("Parâmetros inválidos! Vamos recomeçar");
        calculadora();
    }
    else {
        //Funções

        //Refresh na página
        function novaOperacao() {
            let opcao = prompt(`
            Deseja fazer outra operação?
            (1) Sim
            (2) Não            
        `)

            switch (opcao) {
                case "1":
                    calculadora();
                    break;
                case "2":
                    alert("Até mais!");
                    break;
                default:
                    alert("Opção inválida! Digite uma das opções");
                    novaOperacao();
            }
        }

        //Resultado exibido na tela para o usuário
        function resultadoCalc(res) {
            alert(`${n1} ${operacao} ${n2} = ${res}`)
        }

        function soma() {
            resultado = n1 + n2;
            resultadoCalc(resultado);
            novaOperacao()
        }

        function subtracao() {
            resultado = n1 - n2;
            resultadoCalc(resultado);
            novaOperacao()
        }

        function multiplicacao() {
            resultado = n1 * n2;
            resultadoCalc(resultado);
            novaOperacao()
        }

        function divisaoReal() {
            resultado = n1 / n2;
            resultadoCalc(resultado);
            novaOperacao()
        }

        function divisaoInteira() {
            resultado = n1 % n2;
            resultadoCalc(resultado);
            novaOperacao()
        }

        function potenciacao() {
            resultado = n1 ** n2;
            resultadoCalc(resultado)
            novaOperacao()
        }
    }

   
}



calculadora()