import {useState} from 'react'

import Button from '../button/index'

//Construção de todos os componentes
export default props => {

    //Estado da aplicação
    const [number, setNumber] = useState(0)

    function decremento(){
        setNumber(number - 1)
    }

    function incremento(){
        setNumber(number + 1)
    }

    return (
        <div className="card">
            <div className="card-header">
                Teste de Card
            </div>
            <div className="card-body">
                <h5 className="card-title">Incremento e Decremento</h5>
                <div>
                    <Button color="danger" content="-" onClick={() => decremento()}/>
                    <span> {number} </span>
                    <Button color="success" content="+" onClick={() => incremento()}/>
                </div>

            </div>
        </div>
    )
}