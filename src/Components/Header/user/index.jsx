import { Box, Flex } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { BiUserCircle } from 'react-icons/bi'
import { Context } from "../../../Functions/context";
import { useContext } from "react";

export function User() {

  const {userAuth, login, logout} = useContext(Context);

  return (
    <Flex 
      m={'5px 0px'}
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
      {!userAuth && (<Box>Вхід</Box>)}
    </Flex>
  )
}