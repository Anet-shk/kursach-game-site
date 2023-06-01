import React from "react";
import { Flex, VStack } from "@chakra-ui/react";
import { ImageContainer } from "./ImageContainer";
import { TextSign } from "./TextSign";

export function ItemOfList({prop}) {
  const {name, image} = prop
  return (
    <VStack 
      as="li"
      pb={'5px'}
    >
      <ImageContainer imageObj={{name, image}} />
      <TextSign text={name}/>
    </VStack>
  )
}