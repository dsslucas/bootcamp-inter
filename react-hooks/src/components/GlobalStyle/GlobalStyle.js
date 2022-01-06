import { createGlobalStyle } from 'styled-components';
//import bgImg from '../../img/imgteste.png';

//CSS GLOBAL, Aplicado para toda a aplicação
export const GlobalStyle = createGlobalStyle`
  body {
    background: #005fff;
    color: #332c36;
    padding: 0;
    margin: 0;
    height: 100vh;
    font-family: 'New Tegomin', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center
  }
`;