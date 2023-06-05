import React from "react";
import {Flex} from "@chakra-ui/react";
import { InstanceSearch } from "./search/";
import { MenuButtonHeader } from "./MenuButtonHeader";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { User } from './user/'

export function Header() {
  return (
    <Flex
      as={'header'}
      justify={'space-between'}
      w={['100%', '90%', '85%', '85%', '80%']}
      maxW={'1200px'}
      minW={'10px'}
      m={'auto'}
      mt={2}
      border={'1px solid black'}
      borderColor={'mainBorderColor'}
      borderTopRightRadius={'2xl'}
      borderTopLeftRadius={'2xl'}
    >
      <MenuButtonHeader />
      <InstanceSearch />
      <ColorModeSwitcher />
      <User />
    </Flex>
  )
}