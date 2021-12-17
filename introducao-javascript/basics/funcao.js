//Numero Par ou Impar
function returnEvenValues(array){
    //Armazena números pares
    let evenNumbers = []

    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0){
            console.log(`${array[i]} é par.`)
            evenNumbers.push(array[i]);
        }
        else{
            console.log(`${array[i]} não é par.`)
        }
    }

    console.log("Even Numbers", evenNumbers)
}

let array = [0, 1,2,3,4,5,6,7,8,9,10]

console.log(returnEvenValues(array))