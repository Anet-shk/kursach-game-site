import { Box } from "@chakra-ui/react";
import { HiOutlineHeart } from "react-icons/hi";

export function FavoriteCover() {
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
      />
    </Box>
  )
}