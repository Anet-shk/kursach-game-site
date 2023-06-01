import React from 'react';
import {
  ChakraProvider, useDisclosure,
} from '@chakra-ui/react';
import { Header } from './Components/Header/';
import { extendedTheme } from './GlobalStyles';
import { Main } from './Components/Main';
import { useFetch } from './Hooks/useFetch';
import { ErrorBox } from './Components/ErrorBox';
import { Context } from './Components/Functions/context';
// import { isMobile } from 'react-device-detect';
import { Filter } from './Components/Filter';


function App() {

  const {response, error} = useFetch(); // {response, error}
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Context.Provider value={{response}}> {/* here could be used Redux, but this small project, so... */}
      <ChakraProvider theme={extendedTheme}>
        <Header isFilterOpen={onToggle}/>
        <Filter isOpen={isOpen}></Filter>
        { error ? (<ErrorBox text={'Some went wrong with fetching database with games'}/>) : (<Main/>)} 

        {/* <Box w={['10px', '20px', '30px', '40px', '50px']} h={['10px', '20px', '30px', '40px', '50px']} bg='blackAlpha.700' /> */}
      </ChakraProvider>
    </Context.Provider>
  );
}

export default App;
