console.log("Hello World")

//ID do SPAN
var buttonDecrement = document.getElementsByName("subtrair")[0]
var buttonIncrement = document.getElementsByName("adicionar")[0]
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function condiction(){
    console.log("Número atual:", currentNumber)

    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red"
        if(currentNumber === -10){
            buttonDecrement.disabled = true;
        }
    }
    else{
        currentNumberWrapper.style.color = "black"
        if(currentNumber === 10){
            buttonIncrement.disabled = true;
        }

        else{
            buttonIncrement.disabled = false;
            buttonDecrement.disabled = false; 
        }
    }  
    
    currentNumberWrapper.innerHTML = currentNumber
}

function decremento() {
    currentNumber--;
    condiction();
}

function incremento(){
    currentNumber++;
    condiction()
}