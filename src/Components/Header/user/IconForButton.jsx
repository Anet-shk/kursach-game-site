import { BiUserCircle } from 'react-icons/bi'
import { Context } from '../../../Functions/context';
import { useContext } from 'react';
import { Icon } from '@chakra-ui/react';


export function IconForButton({width = 9, height = 9}) {

  const {userAuth} = useContext(Context);

  return (
    <Icon 
      as={userAuth && userAuth.photoURL ? userAuth.photoURL : BiUserCircle}
      w={width}
      h={height}
      m={'auto'}
      
    />
  )
}