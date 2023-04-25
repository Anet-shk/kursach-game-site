import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Header } from './Components/Header/';
import { extendedTheme } from './GlobalStyles';

function App() {
  return (
    <ChakraProvider theme={extendedTheme}>
      <Header />
      {/* <Box w={['10px', '20px', '30px', '40px', '50px']} h={['10px', '20px', '30px', '40px', '50px']} bg='blackAlpha.700' /> */}
    </ChakraProvider>
  );
}

export default App;
