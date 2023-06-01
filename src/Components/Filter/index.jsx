import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Collapse } from "@chakra-ui/react";
import { GroupButtons } from "./checkRadio/GroupButtons";
import { GroupRange } from "./checkRange/GroupRange";

export function Filter({isOpen}) {
  

  
  return (
    <Collapse  in={isOpen} animateOpacity>
      <Flex
        as="ul"
        listStyleType={'none'}
        textDecoration={'none'}
        w={['100%', '90%', '85%', '85%', '80%']}
        maxW={'1200px'}
        minW={'10px'}
        m={'auto'}
        p={'10px'}
        border={'1px solid black'}
        justifyContent={'space-around'}
        maxH={'95px'}
      >
        <GroupButtons />
        <GroupRange />
      </Flex>
    </Collapse>
  )
}