import {Box} from "@chakra-ui/react";
import React from "react";
import { ListOfGames } from "./ListOfGames";

export const Main = () => {
  return (
    <Box
      as={'main'}
      // justify={'space-between'}
      w={['100%', '90%', '85%', '85%', '80%']}
      maxW={'1200px'}
      minW={'10px'}
      m={'auto'}
      p={'5px'}
      border={'1px solid black'}
      borderBottomRightRadius={'2xl'}
      borderBottomLeftRadius={'2xl'}
    >
    <ListOfGames  />
    </Box>
  )
}