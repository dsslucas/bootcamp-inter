import React, { Fragment } from 'react'

//Contador, SEM ESTADO
export default props => {

    //Valor inicial
    let inicio = 0;

    function dec() {
        inicio = inicio - 1;
        document.getElementById("contador").innerHTML = inicio
    }

    function inc() {
        inicio = inicio + 1;
        document.getElementById("contador").innerHTML = inicio
        console.log(inicio)
    }

    return (
        <div id="noState">
            <h2>Contador sem estado</h2>
            <button className="btn btn-danger" onClick={() => dec()}>-</button>
            <span id="contador">{inicio}</span>
            <button className="btn btn-success" onClick={() => inc()}>+</button>
        </div>

    )
}