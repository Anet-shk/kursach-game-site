import { Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../../../Functions/context";
import { CheckRange } from ".";

export function GroupRange() {
  
  const {filters} = useContext(Context);
  
  return (
    <Flex
      w={'35%'}
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