import React from "react";
import { VStack, Box } from "@chakra-ui/react";
import { ImageContainer } from "./ImageContainer";
import { TextSign } from "./TextSign";

export function ItemOfList({prop}) {

  const {name, image, link} = prop;

  return (
    <VStack 
      as="li"
    >
      <Box 
        p={1}
        mt={4}
        as="a"
        href={link}
        target="_blank"
        textDecor={'none'}
        textAlign={'center'}
        cursor={'pointer'}
        border={'1px solid black'}
        borderColor={'mainBorderColor'}
        borderRadius={'2xl'}
      >
        <ImageContainer imageObj={{name, image}} />
        <TextSign text={name}/>
      </Box> 
    </VStack>
  )
}