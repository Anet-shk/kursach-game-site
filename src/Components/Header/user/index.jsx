import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react'
import { Context } from "../../../Functions/context";
import { useContext } from "react";
import { IconForButton } from "./IconForButton";

export function User({width = 9, height = 9}) {

  const {userAuth, login, logout, onToggleUser, setUserOpen} = useContext(Context);
  
  return (
    <Flex 
      m={'5px 0px'}
      mr={'10px'}
      textAlign={'center'}
      justifyContent={'space-around'}
      flexDir={'column'}
      cursor={'pointer'}
      onClick={(e) => {
        e.preventDefault();
        userAuth ? onToggleUser() : login();
      }}
    >
      {
        userAuth && userAuth.photoURL ? (
          <Image
            src={userAuth.photoURL}
            alt={'Photo of ' + userAuth.displayName}
            borderRadius={'full'}
            w={width}
            h={height}
            maxW={'100px'}
            maxH={'100px'}
            fallbackSrc={<IconForButton />}
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