import { Box } from "@chakra-ui/react";
import React from "react";


export function CheckRange({filters, elObj, currentKey}) {
  console.log(currentKey)
  return (
    <Box as="li">
      <Box
        as="input"
        type="range"
        id={`${currentKey}`}
        max={elObj.max}
        min={elObj.min}
        mr={'5px'}
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