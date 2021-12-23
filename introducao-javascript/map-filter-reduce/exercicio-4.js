//Método Reduce, pt. 1

function soma(arr){
    return arr.reduce(function (previousValue, currentValue){
        console.log(`Previous: ${previousValue}`)
        console.log(`Current: ${currentValue}`)
        return previousValue + currentValue

    })
}

//Array
const numeros = [0, 1, 2, 3, 4, 5, 6]

console.log(soma(numeros))