//Função COM This

//Objetos
const maca = {
    value: 2
}

const laranja = {
    value: 3
}

//Manda o array e um argumento This
function mapThis(arr, thisArg){
    return arr.map(function(item){
        //Temos que retornar alguma coisa!
        return item * this.value;
    }, thisArg)
}

//Array
const numeros = [1, 2]

//Chama a função
console.log(mapThis(numeros, maca))

console.log(mapThis(numeros, laranja))