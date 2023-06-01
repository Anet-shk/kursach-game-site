import { Box } from "@chakra-ui/react";
import React from "react";

export function CheckRadio({filters, currentKey}) {
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