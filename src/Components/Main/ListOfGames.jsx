import React, { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ItemOfList } from "./itemsForList";
import { Context } from "../../Functions/context";

export function ListOfGames() {

  const {currentGames} = useContext(Context);
  
  return (
    <Flex
      as="ul"
      textDecoration={'none'}
      listStyleType={'none'}
      w='100%'
      flexDir={'row'}
      justifyContent={'space-around'}
      flexWrap={'wrap'}
    >
      {
        currentGames && Object.keys(currentGames)[0]
        ? 
        (
          Object.keys(currentGames).map(key => {
            return (<ItemOfList key={key} id={key} prop={currentGames[key]}/>);
          })
        )
        : (
            <Box 
              textAlign={'center'}
              p={4}
            >
              Loading...<br />Or with current filters we have no games<br />Probably - second)
            </Box>
          )
      }
    </Flex>
  )
}