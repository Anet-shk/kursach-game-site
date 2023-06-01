import React, { useContext } from "react";
import { Flex } from "@chakra-ui/react";
import { ItemOfList } from "./itemsForList";
import { Context } from "../Functions/context";

export function ListOfGames() {
  const {response} = useContext(Context);
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
        response 
        ? 
        (
          Object.keys(response.games).map(key => {
            return (<ItemOfList key={key} prop={response.games[key]}/>);
          })
        )

          
        : "Loading"
      }
    </Flex>
  )
}