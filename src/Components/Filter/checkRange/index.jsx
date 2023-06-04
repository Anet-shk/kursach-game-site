import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Context } from "../../../Functions/context";


export function CheckRange({elObj, currentKey}) {
  const { 
    filtersObj, setFiltersObj,
    age, setAge, 
    players, setPlayers,
    config
  } = useContext(Context);

  const currentObj = {age: {value: age, setValue: setAge}, players: {value: players, setValue: setPlayers}};

  useEffect(() => {
    function composeNewFilterObj(filtersObj) {
      // console.log(filtersObj)
      
      if (!filtersObj.checkRange) {
        filtersObj.checkRange = {
          [currentKey]: {value: currentObj[currentKey].value}
        }
      } else if (!filtersObj.checkRange[currentKey]) {
        filtersObj.checkRange[currentKey] = {value: currentObj[currentKey].value}
      } else {
        filtersObj.checkRange[currentKey].value = currentObj[currentKey].value;
      }
      return filtersObj;
    }
    setFiltersObj(composeNewFilterObj(filtersObj));
  }, [age, players, currentKey, currentObj, filtersObj, setFiltersObj]);

  return (
    <Box as="li">
      <Box
        as="input"
        type="number"
        max={config.checkRange[currentKey].max}
        min={config.checkRange[currentKey].min}
        maxW={'30px'}
        p={1}
        value={currentObj[currentKey].value}
        onChange={(e) => currentObj[currentKey].setValue(e.target.value)}
        borderRadius={'4px'}
        m={2}
      />
      <Box
        as="input"
        type="range"
        id={`${currentKey}`}
        max={config.checkRange[currentKey].max}
        min={config.checkRange[currentKey].min}
        mr={'5px'}
        value={currentObj[currentKey].value}
        onChange={(e) => currentObj[currentKey].setValue(e.target.value)}
      />
      <Box
        as="label"
        htmlFor={`${currentKey}`}
      >
        {elObj.key}
      </Box>
    </Box>
  )
}