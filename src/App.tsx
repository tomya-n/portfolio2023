import React from 'react';
import Header from './component/header/Header';
import Main from './component/main/Main'
import Footer from './component/footer/Footer'
// import './App.css';
import styled from 'styled-components';


const AppInner = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;
`;

function App() {
  return (
      <AppInner>
        <Header />
          <Main />
        <Footer />
      </AppInner>
  );
}

export default App;
