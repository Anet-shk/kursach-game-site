import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../../../Functions/context";

export function CheckRadio({filters, currentKey}) {

  const {filtersObj, setFiltersObj} = useContext(Context);

  function getNewFilterObj(e) {
    filtersObj.checkRadio[currentKey] = e.target.checked;
    // filtersObj.checkRadio[currentKey] = filtersObj.checkRadio[currentKey];
    return filtersObj;
  }
  
  return (
    <Box
      as="li"
      textDecoration={'none'}
    >
      <Box 
        as="input"
        type="checkbox"
        id={currentKey}
        mr={'5px'}
        onChange={(e) => {
          setFiltersObj(getNewFilterObj(e));
          console.log({filtersObj})
        }}
      />
      <Box 
        as="label"
        htmlFor={currentKey}
      >
        {filters[currentKey]}
      </Box>
    </Box>
  )
}