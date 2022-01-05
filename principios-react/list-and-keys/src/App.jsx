import React from "react";

//Array de clientes, contendo objetos. Sugestão: colocar ID com algo automático
const listCustomer = [
  {
    id: 1,
    name: 'Lucas Souza',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Rogério',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Gil das Esfihas',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'Nunes Filho',
    skills: ['Reason']
  }
]

const App = () => {

  //Nome das pessoas no array acima
  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  //Visualização das habilidades
  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;