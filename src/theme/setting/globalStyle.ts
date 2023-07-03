import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const globalStyle = createGlobalStyle`
${reset}
*{
  font-family: 'Noto Sans', sans-serif !important;
  font-family: 'Noto Sans JP', sans-serif !important;
}
a{
  text-decoration: none;
  color: #000;
}
`;
