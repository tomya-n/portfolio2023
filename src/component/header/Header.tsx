import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: var(--min-width-pc);
    margin: 0 auto;
    padding: 5px 0;
    .right {
      display: flex;
      justify-content: flex-end;
    }
  `;

  const Links = styled.ul`
    display: flex;
    align-items: center;
    a {
      display: block;
      color: var(--color-gray-900);
      font-weight: 300;
      padding: 10px;
      opacity: 1;
      transition: all 0.2s ease 0s;
      &:hover {
        opacity: 0.7;
        background: #dadada;
      }
    }
    li {
      /* margin: 0 10px; */
    }
    .icon {
      font-size: 2em;
      padding: 0 10px;
      a {
        padding: 0;
        &:hover {
          opacity: 0.7;
          background: none;
        }
      }
      &-twi {
        a {
          width: 31px;
          border-radius: 50%;
          border: 1px solid #1da1f2;
          svg {
            width: 70%;
            margin: 0 auto;
            display: block;
          }
        }
      }
    }
  `;

  const Title = styled.a`
    .main-name {
      color: #26282a;
      font-size: 24px;
      font-weight: bold;
    }
    .sub-name {
      color: #111111;
      font-size: 14px;
      font-weight: 100;
    }
  `;

  return (
    <>
      <header>
        <Wrapper>
          <div className="left">
            <Title href="/" target="_blank">
              <div className="main-name">Tom N</div>
              <div className="sub-name">Markup Engineer</div>
            </Title>
          </div>
          <div className="right">
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
              <li className="icon icon-twi">
                <a href="https://twitter.com/home">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: '#1da1f2' }} />
                </a>
              </li>
              <li className="icon icon-github">
                <a href="https://github.com/tomya-n/portfolio2023">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </Links>
          </div>
        </Wrapper>
      </header>
    </>
  );
}

export default Header;
