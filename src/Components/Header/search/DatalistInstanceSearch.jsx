import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "../../../Functions/context";
import { OptionComponent } from "./OptionComponent";


export function DatalistInstanceSearch({id}) {

  const {games} = useContext(Context)
  return (
    <Box as="datalist" id={id}>
      {Object.keys(games).map(id => {
        return (<OptionComponent text={games[id].name} key={id}/>)
      })}
    </Box>
  )
}