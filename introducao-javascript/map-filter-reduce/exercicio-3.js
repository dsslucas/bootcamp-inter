//Filtra os pares

function filtraPares(arr){
    return arr.filter(function (item){
        //Retorna apenas o que for positivo
        return item % 2 === 0
    })
}

//Array
const numeros = [0, 1, 2, 3, 4, 5]

console.log(filtraPares(numeros))