import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

// styles
import { flexAlignItemsCenter } from "styles/helpers";

const Wrapper = styled.div`
  ${flexAlignItemsCenter};
  width: 100%;
  height: 80px;
  padding: 0 24px;
  background-color: ${theme("elements.toolBar.bg")};
`;

const ToolBar = ({ children }) => <Wrapper>{children}</Wrapper>;

export default ToolBar;
