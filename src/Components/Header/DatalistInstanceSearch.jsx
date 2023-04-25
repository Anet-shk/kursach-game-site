import { Box } from "@chakra-ui/react";
import React from "react";

export const DatalistInstanceSearch = props => {
  return (
    <Box as="datalist" id={props.id}>
      {/* {instead this option should be something that return option with value from database} */}
      <option value={'football'}/>
      <option value={'volleyball'}/>
    </Box>
  )
}