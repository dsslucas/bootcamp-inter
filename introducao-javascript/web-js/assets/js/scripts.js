console.log("Hello World")

//ID do SPAN
var buttonIncrement = document.getElementsByName("adicionar")
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function condiction(){
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "red"
    }
    /*
    else if( currentNumber >= 10){
        console.log("Numero", currentNumber);
        //buttonIncrement.style.display = "none";
        buttonIncrement.style.background = "pink";
    }
    */
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