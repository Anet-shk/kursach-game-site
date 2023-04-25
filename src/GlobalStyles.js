import { extendTheme } from '@chakra-ui/react';

export const extendedTheme = extendTheme({
  styles: {
    global: {
      body: {
        maxWidth: '',
        m: 'auto',
        minW: '200px',
      }
    },
  },
  semanticTokens: {
    colors: {
      menuButtonIcon: {
        _dark: 'gray.300',
      },
    },
  },
})