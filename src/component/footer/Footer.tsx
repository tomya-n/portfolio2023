import styled from 'styled-components';

function Footer() {
  const FooterInner = styled.footer`
    font-weight: 100;
    font-size: 10px;
    text-align: center;
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: var(--min-width-pc);
    margin: 0 auto;
    .right {
      display: flex;
      justify-content: flex-end;
    }
  `;

  return (
    <>
      <FooterInner>
        <Wrapper>Copyright © 2023 tom-n All Rights Reserved.</Wrapper>
      </FooterInner>
    </>
  );
}

export default Footer;
