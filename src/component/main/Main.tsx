import styled from 'styled-components';

function Main() {
  const MainInner = styled.main`
    flex: 1;
    .mv {
      text-align: center;
      background-color: #797979;
      height: 480px;
    }
    .content {
      margin: 0 auto;
      width: var(--min-width-pc);
      background-color: #b1b1b143;
      height: 1000px;
    }
  `;

  return (
    <>
      <MainInner>
        <div className="mv">
          <p>MainVisual</p>
        </div>
        <div className="content"></div>
      </MainInner>
    </>
  );
}

export default Main;
