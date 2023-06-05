import React, { useContext, useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { ImageContainer } from "./ImageContainer";
import { TextSign } from "./TextSign";
import { FavoriteCover } from "./FavoriteCover";
import { Context } from "../../../Functions/context";

export function ItemOfList({prop: key}) {

  const [favoriteLocal, setFavoriteLocal] = useState(false);
  const {currentGames, favorites, setFavorites, getFavData} = useContext(Context);
  console.log({favorites})

  const {name, image, link, id} = currentGames[key];

  if (favorites.indexOf(key) + 1) setFavoriteLocal(true);
  

  return (
    <VStack 
      as="li"
    >
      <Box 
        mt={4}
        pb={4}
        as="a"
        href={link}
        target="_blank"
        textDecor={'none'}
        textAlign={'center'}
        cursor={'pointer'}
        borderRadius={'2xl'}
        id={id}
        onMouseEnter={(e) => {
          setFavoriteLocal(true);
        }}
        onMouseLeave={(e) => {
          setFavoriteLocal(Boolean(favorites.indexOf(key) + 1) ? true : false);
        }}
      >
        {favoriteLocal && (<FavoriteCover myKey={key} favorites={favorites} setFavorites={setFavorites} />)}
        <ImageContainer imageObj={{name, image}} />
        <TextSign text={name}/>
      </Box> 
    </VStack>
  )
}