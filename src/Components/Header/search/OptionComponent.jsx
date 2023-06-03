import { Box } from "@chakra-ui/react";
import React from "react";

export function OptionComponent({text}) {
  return (
    <Box
      as="option"
      value={text}
    />
  )
}