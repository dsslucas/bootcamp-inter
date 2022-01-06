import styled from 'styled-components';
import Counter_noState from '../Counter/Counter_noState';
import Counter_withState from '../Counter/Counter_withState';
import CounterIfood from '../CounterIfood/CounterIfood';

//CSS
import './app.css'

export function App() {
  return (
    <div className="App">
      <h1>UseState e UseEffect</h1>
      <hr />
      <Counter_noState />
      <Counter_withState />
      <CounterIfood />
    </div>
  );
}

