import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";

export function FavoriteCover({favorites, setFavorites, myKey: key}) {

  const [shouldRewriteFavorite, setShouldRewriteFavorite] = useState(0);

  useEffect(() => {
    (favorites.indexOf(key) + 1) ?
      setFavorites(() => {
        favorites = favorites.split(", ").filter(el => key != el).join(', ')
        return favorites;
      }) :
      setFavorites(() => {
        console.log('1', favorites)
        favorites = favorites[0] ? favorites.concat(`, ${key}`) : key;
        console.log('2', favorites)
        return favorites
      })
  }, [shouldRewriteFavorite])

  

  return (
    <Box
      position={"absolute"}
      bgGradient={'linear(to-br, rgba(249,159,255,1) 10%, rgba(255,255,255,0) 50%)'}
      w={20}
      h={20}
      p={1}
      display={'block'}
      borderTopLeftRadius={'2xl'}
      zIndex={2}
    >
      <Box
        as={HiOutlineHeart}
        w={7}
        h={7}
        fill={'rgba(249,159,255,1)'}
        color={'gray.200'}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log('here')
          setShouldRewriteFavorite(() => shouldRewriteFavorite + 1);
        }}
      />
    </Box>
  )
}