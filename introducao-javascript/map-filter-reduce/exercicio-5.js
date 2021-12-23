const listaProdutos = [
    {
        nome: "carne",
        preco: 25.99
    },
    {
        name: "cereal",
        preco: 10
    },
    {
        name: "arroz",
        preco: 18.99
    }
]

//Saldo disponível
const saldo = 100

//Calcula saldo disponivel
function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (previousValue, currentValue){
        console.log("\n Entrei aqui")
        console.log(`Previous: ${previousValue}`)
        console.log(`Current: ${currentValue}`)

        return previousValue - currentValue.preco
    }, saldoDisponivel) //Inicia com o saldo disponível
}

console.log(calculaSaldo(saldo, listaProdutos))