import { HamburgerIcon } from '@chakra-ui/icons'
import React from "react";

export const MenuButtonHeader = ({isFilterOpen}) => {
  return (
    <HamburgerIcon 
      w={'40px'} 
      h={'40px'} 
      m={'3'} 
      ml={'4'} 
      color={'menuButtonIcon'} 
      onClick={() => {
        isFilterOpen(current => !current)
      }}
      cursor={'pointer'}
    />
  )
}