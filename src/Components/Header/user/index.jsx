import { Box, Flex } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { BiUserCircle } from 'react-icons/bi'
import { Context } from "../../../Functions/context";
import { useContext } from "react";

export function User() {

  const {userAuth, login} = useContext(Context);

  return (
    <Flex 
      p={'auto'}
      textAlign={'center'}
      justifyContent={'space-around'}
      flexDir={'column'}
      cursor={'pointer'}
      onClick={(e) => {
        e.preventDefault();
        userAuth ? logout() : login();
      }}
    >
      <Icon 
        as={BiUserCircle}
        w={9}
        h={9}
        m={'auto'}
      />
      <Box>
        {userAuth ? 'Вихід' : 'Вхід'}
      </Box>
    </Flex>
  )
}