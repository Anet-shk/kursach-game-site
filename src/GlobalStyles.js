import { extendTheme } from '@chakra-ui/react';

export const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxWidth: '1200px',
        m: 'auto',
        minW: '200px',
      },
    }
  },
  semanticTokens: {
    colors: {
      menuButtonIcon: {
        _dark: 'gray.300',
      },
      mainBorderColor: {
        _dark: 'blue.800',
      },
    },
  },
})