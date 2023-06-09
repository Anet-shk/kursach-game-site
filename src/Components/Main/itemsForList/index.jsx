import React, { useContext, useEffect, useState } from "react";
import { VStack, Box, fadeConfig } from "@chakra-ui/react";
import { ImageContainer } from "./ImageContainer";
import { TextSign } from "./TextSign";
import { FavoriteCover } from "./FavoriteCover";
import { Context } from "../../../Functions/context";

export function ItemOfList({ prop: key }) {

  const [favoriteLocal, setFavoriteLocal] = useState(false);
  const { currentGames, favorites, setFavorites, renderLoginFav, setRenderLoginFav} = useContext(Context);
  
  const {name, image, link, id} = currentGames[key];

  // setFavorites(() => {
  //   favorites[0] ? favorites.split(',') : [];
  //   return favorites;
  // })

  useEffect(() => {
    if (favorites.split(",").indexOf(key) + 1) setFavoriteLocal(true);
  }, [renderLoginFav])
  

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
        // border={'1px solid black'}
        // borderColor={'mainBorderColor'}
        borderRadius={'2xl'}
        id={id}
        onMouseEnter={(e) => {
          e.stopPropagation()
          setFavoriteLocal(true);
        }}
        onMouseLeave={(e) => {
          e.stopPropagation()
          setFavoriteLocal(() => Boolean(favorites.split(',').indexOf(key) + 1) ? true : false);
        }}
      >
        {favoriteLocal && (<FavoriteCover myKey={key} myFavorites={favorites} setFavorites={setFavorites} />)}
        <ImageContainer imageObj={{name, image}} />
        <TextSign text={name}/>
      </Box> 
    </VStack>
  )
}