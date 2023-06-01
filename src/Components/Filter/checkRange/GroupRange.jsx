import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../../Functions/context";
import { CheckRange } from ".";

export function GroupRange() {
  
  const {response} = useContext(Context);
  if (!response) return

  const filters = response ? response.filters : response;

  return (
    <Flex
      w={'30%'}
      flexDir={'column'}
      justifyContent={'space-around'}
      align={'start'}
    >
      {
        filters ? 
          Object.keys(filters).map(key => {
            return (typeof filters[key] === 'object') && (<CheckRange currentKey={key} elObj={filters[key]} key={key} />);
          }) :
          ('loading...')
      }
    </Flex>
  )
}