import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    font-size: 13px;
    color: #4D4D4D;
    padding: 0;
    margin: 0;
  }

  html {
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
