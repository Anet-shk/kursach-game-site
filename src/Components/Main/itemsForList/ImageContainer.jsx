import { Box } from "@chakra-ui/react";
import React from "react";

export function ImageContainer({imageObj}) {

  const {name, image} = imageObj;

  return (
    <Box
      mt={'8'}
      w={'200px'}
      h={'200px'}
      // bgColor={'pink.100'}
      verticalAlign={'center'}
      position={'relative'}
    >
      <Box
        as="img"
        src={require(`../../../source/media/gamesPreview/${image}`)}
        alt={name}
        title={name}
        verticalAlign={'center'}
        h={'auto'}
        w={'auto'}
        m={'auto'}
        pos={'absolute'}
        top={'0'}
        bottom={'0'}
        right={'0'}
        left={'0'}
        borderRadius={'4px'}
      />
    </Box>
  )
}