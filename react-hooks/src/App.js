import styled from 'styled-components';

export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Content>Teste</Content>
      <p>Teste com React Hooks</p>
    </div>
  );
}

//Container
const Content = styled.div`
  background-color: white
`;