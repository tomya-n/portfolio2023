import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
          <Links>
            <li>
              <a href="https://twitter.com/home">
                <FontAwesomeIcon icon={faTwitter} style={{ color: '#4d9aff' }} />
              </a>
            </li>
            <li>
              <a href="https://github.com/tomya-n/portfolio2023">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </Links>
        </div>
      </header>
    </>
  );
}

export default Header;
