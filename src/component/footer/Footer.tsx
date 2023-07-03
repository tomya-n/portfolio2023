import styled from 'styled-components';

function Footer() {
  const FooterInner = styled.footer`
    font-weight: 100;
    text-align: center;
  `;

  return (
    <>
      <FooterInner>Copyright © 2023 tom-n All Rights Reserved.</FooterInner>
    </>
  );
}

export default Footer;
