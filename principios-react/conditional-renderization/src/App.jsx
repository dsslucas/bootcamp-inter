import React from "react";

const buttonA = <button>Histórico dos Clientes</button>

const buttonB = <button>Cadastrar Cliente</button>

const hasCustomer = true

const App = () => {

  const renderShowHistory = (
    <div>
      Clique no botão abaixo para visualizar o histórico dos clientes
      <br />
      {buttonA}
    </div>
  )

  const renderAddCustomer = (
    <div>
      Clique abaixo para cadastrar o cliente
      <br />
      {buttonB}
    </div>
  )

  //Evitando que seja renderizado
  const showCustomer = () => {

    if (!hasCustomer) return null

    return (
      <div>
        <h1>Nome do Cliente: Lucas Souza</h1>
      </div>
    )
  }

  return (
    <div>
      <p>Teste de Renderizações</p>
      {hasCustomer ? renderShowHistory : renderAddCustomer}
      <div>
        {showCustomer()}
      </div>
    </div>
  );
};
export default App;