import { useState, useEffect } from "react";

// utils
import { generateArray } from "utils/helpers";

const useArrayOfNumbers = () => {
  const [arrayOfNumbers, setArrayOfNumbers] = useState([]);

  const generateNewArray = () => {
    setArrayOfNumbers(generateArray(100));
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  return {
    arrayOfNumbers,
    setArrayOfNumbers,
    generateNewArray
  };
};

export default useArrayOfNumbers;
