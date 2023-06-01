import React from "react";
import {Flex} from "@chakra-ui/react";
import { InstanceSearch } from "./InstanceSearch";
import { MenuButtonHeader } from "./MenuButtonHeader";
import { ColorModeSwitcher } from './ColorModeSwitcher';

export const Header = (props) => {
  return (
    <Flex
      as={'header'}
      justify={'space-between'}
      w={['100%', '90%', '85%', '85%', '80%']}
      maxW={'1200px'}
      minW={'10px'}
      m={'auto'}
      border={'1px solid black'}
      borderTopRightRadius={'2xl'}
      borderTopLeftRadius={'2xl'}
    >
      <MenuButtonHeader {...props}/>
      <InstanceSearch />
      <ColorModeSwitcher />
    </Flex>
  )
}