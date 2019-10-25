import React from "react";
import styled from "styled-components";

// hooks
import useControls from "features/sorting/hooks/useControls";

// components
import Button from "components/elements/Button";

// styles
import { flexJustifyContentSpaceBetween } from "styles/helpers";

const Wrapper = styled.div`
  ${flexJustifyContentSpaceBetween};
  width: 100%;
`;

const SortWrapper = styled.div``;

const Controls = ({ generateNewArray }) => {
  const {
    handleMergeSort,
    handleBubbleSort,
    handleQuickSort,
    handleSelectionSort,
    handleHeapSort
  } = useControls();

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
