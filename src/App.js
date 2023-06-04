import React from 'react';
import {
  ChakraProvider, useDisclosure,
} from '@chakra-ui/react';
import { extendedTheme } from './GlobalStyles';
import { useFetch } from './Hooks/useFetch';
import { Context } from './Functions/context'; // here could be used Redux, but this small project, so...
// import { isMobile } from 'react-device-detect';
import { SomeLayer } from './Components';
import { useFiltersObj } from './Hooks/useFiltersObj';
import { useDeletedGames } from './Hooks/useDeletedGames';
import { useRange } from './Hooks/useRange';
import { useRadioValues } from './Hooks/useRadioValues';
import { useCurrentGames } from './Hooks/useCurrentGames';
import { useRerenderFilters } from './Hooks/useRerenderFilters';
import { buildConfig } from './Config';


function App() {

  const { games, setGames, error, filters } = useFetch(); // {response, error}
  const { isOpen, onToggle } = useDisclosure(); // it`s for filters slider (hamburger)
  const { filtersObj, setFiltersObj } = useFiltersObj(filters);
  const { deletedGames, setDeletedGames } = useDeletedGames();
  const { rangeValue, setRangeValue } = useRange(filters);
  const { currentGames, setCurrentGames } = useCurrentGames({});
  const { rerenderFilters, setRerenderFilters} = useRerenderFilters(0);
  const config = buildConfig(Object.keys(filters).filter(key => typeof filters[key] === 'string'));
  const { age, setAge, players, setPlayers } = useRadioValues(config);
  
  return (
    <Context.Provider value={
      {
        games, setGames,
        currentGames, setCurrentGames,
        filters,
        rerenderFilters, setRerenderFilters,
        onToggle,
        filtersObj, setFiltersObj,
        deletedGames, setDeletedGames,
        rangeValue, setRangeValue,
        age, setAge, 
        players, setPlayers,
        config
      }
    }>
      <ChakraProvider theme={extendedTheme}>
        <SomeLayer isOpen={isOpen} error={error}/>
      </ChakraProvider>
    </Context.Provider>
  );
}

export default App;
