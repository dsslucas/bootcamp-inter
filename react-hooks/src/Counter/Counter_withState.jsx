import React, { useState} from 'react'

//Contador, SEM ESTADO
export default props => {

    //Estado
    const [numero, setNumero] = useState(0);

    return (
        <div id="noState">
            <h2>Contador com estado</h2>
            <button className="btn btn-danger" onClick={() => setNumero(numero - 1)}>-</button>
            <span id="contador">{numero}</span>
            <button className="btn btn-success" onClick={() => setNumero(numero + 1)}>+</button>
        </div>

    )
}