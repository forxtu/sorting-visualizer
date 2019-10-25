import React from "react";

// hooks
import useArrayOfNumbers from "features/sorting/hooks/useArrayOfNumbers";

// components
import ToolBar from "components/blocks/ToolBar";
import Visualization from "features/sorting/components/Visualization";
import Controls from "features/sorting/components/Controls";

const SortingVisualizer = () => {
  const {
    arrayOfNumbers,
    setArrayOfNumbers,
    generateNewArray
  } = useArrayOfNumbers();

  console.log(arrayOfNumbers);

  return (
    <>
      <ToolBar>
        <Controls
          generateNewArray={generateNewArray}
          arrayOfNumbers={arrayOfNumbers}
          setArrayOfNumbers={setArrayOfNumbers}
        />
      </ToolBar>
      <Visualization arrayOfNumbers={arrayOfNumbers} />
    </>
  );
};

export default SortingVisualizer;
