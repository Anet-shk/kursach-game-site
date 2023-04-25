import { Box, HStack} from "@chakra-ui/react";
import React from "react";
import { DatalistInstanceSearch } from "./DatalistInstanceSearch";
import { SearchIcon } from "@chakra-ui/icons";

export const InstanceSearch = () => {
  return (
    <HStack
      w={['100%', '80%', '80%', '80%', '80%']}
      m={['3 1', '3', '3', '3', '3']}
    >
      <SearchIcon/>
      <Box
        as="input"
        type="search"
        list="instanceSearch"
        name="instanceSearch"
        w={'100%'}
        p={['2 1', '2', '2', '2', '2']}
        ml={'1'}
        borderRadius={'20px'}
        placeholder="Start type to find your game..."
      />
      <DatalistInstanceSearch id='instanceSearch' />
    </HStack>
  )
} 