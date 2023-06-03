import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../../../Functions/context";
import { CheckRadio } from ".";

export function GroupButtons() {
  // const {filtersObj, setFiltersObj} = useContext(Context);
  
  const {filters} = useContext(Context);
  if (!filters) return;

  return (
    <Flex
      w={'50%'}
      flexDir={'column'}
      flexWrap={'wrap'}
      // onChange={() => {
      //   setFiltersObj()
      // }}
    >
      {
        filters ? 
          Object.keys(filters).map(key => {
            return (typeof filters[key] !== 'object') && (<CheckRadio filters={filters} currentKey={key} key={key}/>);
          }) :
          ('loading...')
      }
    </Flex>
  )
}