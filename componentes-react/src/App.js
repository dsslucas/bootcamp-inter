//Import de componente
import Item from './components/item/index'
import Card from './components/card/index'

function App() {
  return (
    <div className="App">

      <h1>Hello World</h1>
      <ul>
        <Item color="success" content="Item 1" />
        <Item color="secondary" content="Item 2" />
        <Item color="danger" content="Item 3" />
        <Item color="warning" content="Item 4" />
        <Item color="info" content="Item 5" />
        <Item color="dark" content="Item 6" />
        <Item color="light" content="Item 7" />

      </ul>
      <Card />
    </div>
  );
}

export default App;
