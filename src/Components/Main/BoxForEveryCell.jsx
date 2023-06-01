import { Box } from "@chakra-ui/react";
import React from "react";

export function BoxForEveryCell({text}) {
  return (
    <Box
      as="div"
      w={'10%'}
      textAlign={'center'}
      m={'auto'}
    >
      {typeof text === 'object' ? Object.values(text).join(', ') : String(text)}
    </Box>
  )
}