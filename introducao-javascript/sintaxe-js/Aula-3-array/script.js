//Array simples
let array = ['string', 1, true];
console.log(array)

let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3']]
console.log(array2[0])

//Funcao como parâmetro e uma instrução
array.forEach(function(item, index){
    console.log(item, index)
})

//Push. Adiciona um novo item no final do array
array.push("novo item")
console.log(array)

//Pop. Remove um item do array
array.pop()
console.log(array)

//Shift. Tira um item do início do array
array.shift()
console.log(array)

//Unshift: adiciona um item no inicio do arrya
array.unshift("Festa na roça é pra lá de bom")
console.log(array)

//indexOf
console.log(array.indexOf(true))

//Splice: remove ou substitui por um indice
array.splice(0, 3);
console.log(array)

//Slice: Retorna uma parte de array já existente
let novoArray = array.slice(0, 3)
console.log(novoArray)

//Objetos

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ["array", 1, 2, 3]
}

console.log(object.number)

//Desestruturação do objeto
var string = object.string
console.log(string)

var arrayInterno = object.array;
console.log(arrayInterno)

//Desestruturação por chaves
var {string, boolean} = object;
