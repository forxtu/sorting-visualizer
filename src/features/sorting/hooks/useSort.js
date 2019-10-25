import { useState, useEffect } from "react";

// hooks
import useMergeSort from "features/sorting/hooks/useMergeSort";
import useBubbleSort from "features/sorting/hooks/useBubbleSort";

const useSort = ({ arrayOfNumbers, setArrayOfNumbers }) => {
  const { mergeSort } = useMergeSort();
  const { bubbleSort } = useBubbleSort();

  const handleMergeSort = () => {
    setArrayOfNumbers(mergeSort(arrayOfNumbers));
  };

  const handleBubbleSort = () => {
    setArrayOfNumbers(bubbleSort(arrayOfNumbers));
  };

  const handleQuickSort = () => {};

  const handleSelectionSort = () => {};
  const handleHeapSort = () => {};

  return {
    handleMergeSort,
    handleBubbleSort,
    handleQuickSort,
    handleSelectionSort,
    handleHeapSort
  };
};

export default useSort;
