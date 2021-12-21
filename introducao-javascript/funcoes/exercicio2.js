//Manipulação de This

//Objetos
const pessoa1 = {
    nome: "Lucas",
    idade: 24.
}

const pessoa2 = {
    nome: "Gil das Esfihas",
    idade: 48
}

//Calcula a idade
function calculaIdade(anos) {
	return `
    A idade atual de ${this.nome} é de ${this.idade}.
    Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

//Método Call, consulta o objeto com base nos parâmetros passados
console.log(calculaIdade.call(pessoa1, 20))

//Método Apply
console.log(calculaIdade.apply(pessoa2, [15]))