import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { ItemOfList } from "./itemsForList";
import { Context } from "../../Functions/context";

export function ListOfGames() {
  const {games} = useContext(Context);
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
        games 
        ? 
        (
          Object.keys(games).map(key => {
            return (<ItemOfList key={key} prop={games[key]}/>);
          })
        )
        : "Loading"
      }
    </Flex>
  )
}