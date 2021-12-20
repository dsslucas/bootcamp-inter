//Solução 1

function verificaPalindromo(string) {
    //Verifica se a string existe
    if (!string) return "String inexistente";

    //Split transforma em array, que depois é revertido, depois junta tudo em uma string com join.
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("onibus"))

//Solução 2

function verificaPalindromo2(string) {
    //Verifica se a string existe
    if (!string) return "String inexistente";

    //Percorre o caractere
    for (var i = 0; i < string.length / 2; i++) {
		if (string[i] !== string[string.length - 1 - i]) {
			return console.log(false);
		}
	}
	return console.log(true);
}

verificaPalindromo2('asa');