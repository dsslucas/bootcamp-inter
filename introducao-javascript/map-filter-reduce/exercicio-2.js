//Função SEM this

//Multiplica os elementos do array por 2
function mapSemThis(arr){
    return arr.map(function (item){
        return item * 2
    })
}

//Vantagem maior do Map: não altera o array original.

//Array
const numeros = [1, 2, 3, 4, 5];

console.log(mapSemThis(numeros))