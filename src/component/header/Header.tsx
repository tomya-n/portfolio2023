import styled from 'styled-components';

function Header() {
  const Links = styled.ul`
    display: flex;
  `;

  return (
    <>
      <header>
        <div className="wrapper">
          <a href="/" className="page-title">
            <div className="main-name">Tom N</div>
            <div className="sub-name">Markup Engineer</div>
          </a>
          <Links>
            <li>
              <a href="/">TOP</a>
            </li>
            <li>
              <a href="/">PROFILE</a>
            </li>
            <li>
              <a href="/">CONTACT</a>
            </li>
          </Links>
        </div>
      </header>
    </>
  );
}

export default Header;
