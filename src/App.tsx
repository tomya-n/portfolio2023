import React from 'react';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
*{
  font-family: 'Noto Sans', sans-serif !important;
  font-family: 'Noto Sans JP', sans-serif !important;
}
a{
  text-decoration: none;
  color: #000;
}
`;

const AppInner = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppInner>
        <Header />
        <Main />
        <Footer />
      </AppInner>
    </>
  );
}

export default App;
