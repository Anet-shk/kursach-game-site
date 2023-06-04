import { Box } from "@chakra-ui/react";
import React from "react";

export function TextSign({text}) {
  return (
    <Box 
      as="p"
      maxW={'195px'}
    >
      {text}
    </Box>
  )
}