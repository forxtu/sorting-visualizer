import React from "react";
import { arrayOf, number } from "prop-types";
import styled from "styled-components";
import { theme } from "styled-tools";

// styles
import { flexJustifyContentSpaceBetween } from "styles/helpers";

const Wrapper = styled.div`
  ${flexJustifyContentSpaceBetween};
  padding: 0 24px;
`;
const Element = styled.div`
  width: 2px;
  background-color: ${theme("elements.arrayElement.bg")};
`;

const Visualization = ({ arrayOfNumbers }) => (
  <Wrapper>
    {arrayOfNumbers.map(element => (
      <Element style={{ height: `${element}px` }} />
    ))}
  </Wrapper>
);

Visualization.propTypes = {
  arrayOfNumbers: arrayOf(number)
};

export default Visualization;
