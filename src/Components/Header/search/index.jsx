import { Box, HStack} from "@chakra-ui/react";
import React, { useContext } from "react";
import { DatalistInstanceSearch } from "./DatalistInstanceSearch";
import { SearchIcon } from "@chakra-ui/icons";
import { Context } from "../../../Functions/context";

export const InstanceSearch = () => {

  const {
    filtersObj, setFiltersObj,
    rerenderFilters, setRerenderFilters
  } = useContext(Context);

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
        onChange={(e) => {
          setFiltersObj(() => {
            filtersObj.search = e.target.value;
            return filtersObj;
          });
          setRerenderFilters(() => rerenderFilters + 1)
        }}
        // onChange={}
      />
      <DatalistInstanceSearch id='instanceSearch' />
    </HStack>
  )
} 