import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../../Functions/context";
import { CheckRadio } from ".";

export function GroupButtons() {
  
  const {response} = useContext(Context);
  if (!response) return

  const filters = response ? response.filters : response;

  return (
    <Flex
      w={'50%'}
      flexDir={'column'}
      flexWrap={'wrap'}
    >
      {
        filters ? 
          Object.keys(filters).map(key => {
            return (typeof filters[key] !== 'object') && (<CheckRadio filters={filters} currentKey={key} key={key} />);
            
          }) :
          ('loading...')
      }
    </Flex>
  )
}