import { Box } from "@chakra-ui/react";
import React from "react";

export function TextSign({text}) {
  return (
    <Box 
      as="p"
    >
      {text}
    </Box>
  )
}