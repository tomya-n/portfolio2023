import React from 'react';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Footer from './component/footer/Footer';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/index';
import { GlobalStyle } from './theme/setting/globalStyle';

const AppInner = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  padding: 5px 0 10px;
  box-sizing: border-box;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppInner>
          <Header />
          <Main />
          <Footer />
        </AppInner>
      </ThemeProvider>
    </>
  );
}

export default App;
