import React from "react";
import styled from "styled-components";

// hooks
import useSort from "features/sorting/hooks/useSort";

// components
import Button from "components/elements/Button";

// styles
import { flexJustifyContentSpaceBetween } from "styles/helpers";

const Wrapper = styled.div`
  ${flexJustifyContentSpaceBetween};
  width: 100%;
`;

const SortWrapper = styled.div``;

const Controls = ({ generateNewArray, arrayOfNumbers, setArrayOfNumbers }) => {
  const {
    handleMergeSort,
    handleBubbleSort,
    handleQuickSort,
    handleSelectionSort,
    handleHeapSort
  } = useSort({ arrayOfNumbers, setArrayOfNumbers });

  return (
    <Wrapper>
      <Button onClick={generateNewArray}>Generate new array</Button>
      <SortWrapper>
        <Button onClick={handleMergeSort}>Merge sort</Button>
        <Button onClick={handleBubbleSort}>Bubble sort</Button>
        <Button onClick={handleQuickSort}>Quick sort</Button>
        <Button onClick={handleSelectionSort}>Selection sort</Button>
        <Button onClick={handleHeapSort}>Heap sort</Button>
      </SortWrapper>
    </Wrapper>
  );
};

export default Controls;
