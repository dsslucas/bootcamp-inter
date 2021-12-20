//Muda o array
function mudaArray(array){
    //Verifica se o array existe
    if(!array) return -1
    
    //Array vazio
    if(!array.length) return -1;
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === 0){
            console.log("Você é 0")
        }

        //Se achar número par
        else if (array[i] % 2 === 0){
            console.log("Caí na segunda condição")
            array[i] = 0;
        }
    }

    return array
}

let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mudaArray(vetor))