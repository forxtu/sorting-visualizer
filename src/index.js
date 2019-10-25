import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// utils
import light from "styles/themes/light";

// components
import SortingVisualizer from "features/sorting/components/SortingVisualizer";

// styles
import GlobalStyles from "styles/globalStyles";

ReactDOM.render(
  <StyledThemeProvider theme={light}>
    <GlobalStyles />
    <SortingVisualizer />
  </StyledThemeProvider>,
  document.getElementById("root")
);
