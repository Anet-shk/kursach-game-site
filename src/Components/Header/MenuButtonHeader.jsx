import { HamburgerIcon } from '@chakra-ui/icons'
import React, {useContext} from "react";
import { Context } from '../../Functions/context';


export const MenuButtonHeader = () => {

  const {onToggle} = useContext(Context)

  return (
    <HamburgerIcon 
      w={'40px'}
      h={'40px'}
      m={'3'}
      ml={'4'}
      color={'menuButtonIcon'}
      onClick={() => {
        onToggle(current => !current)
      }}
      cursor={'pointer'}
    />
  )
}