import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { Context } from "../../../Functions/context";
import { useContext } from "react";
import { IconForButton } from "./IconForButton";

export function User({width = 9, height = 9}) {

  const {userAuth, login, logout} = useContext(Context);

  console.log(userAuth)
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
      {
        userAuth && userAuth.photoURL ? (
          <Image
            src={userAuth.photoURL}
            alt={userAuth.displayName}
            borderRadius={'2xl'}
            w={width}
            h={height}
          />
        ) : (
          <IconForButton 
            height={height} 
            width={width}
          />
        )
      }
      
      {!userAuth && (<Box>Вхід</Box>)}
    </Flex>
  )
}