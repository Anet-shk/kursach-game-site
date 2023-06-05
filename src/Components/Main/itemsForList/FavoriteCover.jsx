import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";

export function FavoriteCover({myFavorites: favorites, setFavorites, myKey: key}) {

  const [shouldRewriteFavorite, setShouldRewriteFavorite] = useState(0);

  useEffect(() => {
    
    (favorites.split(',').indexOf(key) + 1) ?
      setFavorites(() => {
        console.log('01', favorites)
        favorites = favorites.split(",").filter(el => key != el).join(',')
        console.log('02', favorites)
        return favorites;
      }) :
      setFavorites(() => {
        console.log('11', favorites)
        favorites = favorites[0] ? favorites.concat(`,${key}`) : key;
        console.log('12', favorites)
        return favorites
      })
  }, [shouldRewriteFavorite]);

  

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