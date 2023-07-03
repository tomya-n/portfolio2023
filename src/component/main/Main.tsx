import styled from 'styled-components';

function Main() {
  const MainInner = styled.main`
    flex: 1;
  `;

  return (
    <>
      <MainInner>
        <h1>main</h1>
      </MainInner>
    </>
  );
}

export default Main;
