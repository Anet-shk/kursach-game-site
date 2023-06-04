import React, { useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { ImageContainer } from "./ImageContainer";
import { TextSign } from "./TextSign";
import { FavoriteCover } from "./FavoriteCover";

export function ItemOfList({prop}) {

  const {name, image, link, id} = prop;

  const [favoriteLocal, setFavoriteLocal] = useState(false);

  return (
    <VStack 
      as="li"
    >
      <Box 
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
        id={id}
        onMouseEnter={(e) => {
          setFavoriteLocal(true);
          console.log('enter', e.target);
        }}
        onMouseLeave={(e) => {
          setFavoriteLocal(false);
          console.log('leave', e.target);
        }}
      >
        {favoriteLocal && (<FavoriteCover />)}
        <ImageContainer imageObj={{name, image}} />
        <TextSign text={name}/>
      </Box> 
    </VStack>
  )
}