//Set

const array = [30, 30, 40, 5, 223, 2049, 3034, 5]

function valores(arr){
    const mySet = new Set(arr);
    
    //Cria um novo array utilizando o Spread
    return [...mySet]
}

console.log(valores(array))