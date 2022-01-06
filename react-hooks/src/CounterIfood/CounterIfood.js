//CSS
import "./counterifood.css"

//Componente funcional. USE RFC, atalho rápido
import React, { Fragment, useState, useEffect } from 'react'

export default function CounterIfood() {

    //ESTADO
    const [value, setValue] = useState(1)

    //Estado para botões
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active")

    //Valor base de um pedido
    let valorBase = 12.99

    //Efeito colateral, que depende de uma ação para ser executada
    useEffect(() => {
        //Altera o valor a cada clique gerado
        document.getElementById("moeda").innerHTML = valorBase * value
    }, [value])

    function dec() {
        //Para não dar pedidos abaixo de zero
        if (value > 0) {
            setValue(value - 1)
        }
        if (value <= 1) {
            //Muda o CSS caso tenha 0 pedidos marcados
            setButtonStyle("counter-button-minus-desactive")
        }
    }

    function inc() {
        setValue(value + 1)

        //Muda o CSS para que o - tenha cor vermelha quando tem pedidos >=1
        setButtonStyle("counter-button-minus-active")
    }

    return (
        <Fragment>
            <h2>Contador: Exemplo Ifood</h2>
            <div className="countex-wrapper">

                <button
                    className={buttonStyle}
                    onClick={() => dec()}>
                    -
                </button>
                <span>{value}</span>
                <button
                    className="counter-button-plus-active"
                    onClick={() => inc()}>
                    +
                </button>
                <button id="moeda">12,00</button>
            </div>
        </Fragment>

    )


}