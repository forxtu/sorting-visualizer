import styled from "styled-components";
import { theme } from "styled-tools";

const Button = styled.button`
  padding: 6px 12px;
  background: ${theme("elements.button.bg")};
  border: 1px solid ${theme("elements.button.border")};
  color: ${theme("elements.button.color")};
  cursor: pointer;
  margin: 0 12px;

  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

export default Button;
