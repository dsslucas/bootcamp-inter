//CSS do App
import './App.css';

//Componentes
import Button from './components/Button'
import Lifecycle from './components/Lifecycle'

function soma(a,b){
  return a+b
}


function componentes(){
  return (
    <div className='apresentacao'>
      <h3>Componentes</h3>
      <Button name="Componente de Botão" />
      <Lifecycle />
      
    </div>
  )
}



function primeiroJSX(){
  return (
    <div className='apresentacao'>
      <h1>Lucas Souza</h1><span>Futuro desenvolvedor frontend</span>

      {componentes()}
    </div>
  )
}

function App() {
  return (
    <div className="App">
        {primeiroJSX()}

    </div>
  );
}

export default App;
