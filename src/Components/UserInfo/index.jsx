import { Box, Collapse, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { User } from "../Header/user/"
import { useContext } from "react";
import { Context } from "../../Functions/context";
import { GiExitDoor } from "react-icons/gi"

export function UserInfo() {

  const {userAuth, isOpenUser, logout, onToggleUser} = useContext(Context);

  return (
    <Collapse
      in={isOpenUser}
      animateOpacity
    >
      <Flex
        w={['100%', '90%', '85%', '85%', '80%']}
        maxW={'1200px'}
        minW={'10px'}
        m={'10px auto'}
        p={4}
        justifyContent={'space-between'}
      >
        <Flex
          justifyContent={"space-around"}
          width={'40%'}
        >
          <User width={'100px'} height={'100px'}/>
          <Text
            fontSize={'2xl'}
          >
            {userAuth && userAuth.displayName} <br />
            <Box 
              as="span" 
              fontSize={'xl'}
            >
              {userAuth && userAuth.email}
            </Box>
          </Text>
        </Flex>
        <Icon
          w={8}
          h={8}
          as={GiExitDoor}
          cursor={'pointer'}
          onClick={(e) => {
            logout()
            onToggleUser()
          }}
        />
      </Flex>
    </Collapse>
    
  )
}