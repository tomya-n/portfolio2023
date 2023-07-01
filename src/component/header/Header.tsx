import './style.css';

function Header() {
  return (
    <>
      <header>
        <div className="wrapper">
          <a href="/" className="page-title">
            <div className="main-name">Tom N</div>
            <div className="sub-name">Markup Engineer</div>
          </a>

          <div className="links">
            <ul>
              <li>
                <a href="/">TOP</a>
              </li>
              <li>
                <a href="/">PROFILE</a>
              </li>
              <li>
                <a href="/">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
