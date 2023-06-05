import React, { useState } from 'react';
import {
  ChakraProvider, useDisclosure,
} from '@chakra-ui/react';
import { extendedTheme } from './GlobalStyles';
import { useFetch } from './Hooks/useFetch';
import { Context } from './Functions/context'; // here could be used Redux, but this small project, so...
// import { isMobile } from 'react-device-detect';
import { SomeLayer } from './Components';
import { useFiltersObj } from './Hooks/useFiltersObj';
// import { useDeletedGames } from './Hooks/useDeletedGames';
import { useRange } from './Hooks/useRange';
import { useRadioValues } from './Hooks/useRadioValues';
import { useCurrentGames } from './Hooks/useCurrentGames';
import { useRerenderFilters } from './Hooks/useRerenderFilters';
import { buildConfig } from './Config';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useUserAuth } from './Hooks/useUserAuth';
import { useDb } from './Hooks/useDb';
import { useFavorites } from './Hooks/useFavorites';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBEgWEXpXu8RIB5wB-Nxu2VfAA72t9vh8I",
    authDomain: "kursach-game-site.firebaseapp.com",
    databaseURL: "https://kursach-game-site-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kursach-game-site",
    storageBucket: "kursach-game-site.appspot.com",
    messagingSenderId: "1068377534553",
    appId: "1:1068377534553:web:1be0f2d7d7edc3f2064148",
    measurementId: "G-KX4V1921GZ"
  };
  const app = initializeApp(firebaseConfig);
  const rewriteFavorite = useState(0);
  const [renderLoginFav, setRenderLoginFav] = useState(0);
  const {  games, setGames, error, filters } = useFetch(); // {response, error}
  // const { database,games: games1, setGames: setGames1, error: error1, filters: filters1 } = useDb(app);
  const { isOpen: isOpenUser, onToggle: onToggleUser } = useDisclosure();
  const { userAuth, setUserAuth, login, logout, errorLogin, favorites, setFavorites } = useUserAuth(app, renderLoginFav, setRenderLoginFav);
  const { writeUserData} = useFavorites(app, userAuth);
  const { isOpen, onToggle } = useDisclosure(); // it`s for filters slider (hamburger)
  const { filtersObj, setFiltersObj } = useFiltersObj(filters);
  // const { deletedGames, setDeletedGames } = useDeletedGames();
  const { rangeValue, setRangeValue } = useRange(filters);
  const { currentGames, setCurrentGames } = useCurrentGames({});
  const { rerenderFilters, setRerenderFilters} = useRerenderFilters(0);
  const config = buildConfig(Object.keys(filters).filter(key => typeof filters[key] === 'string'));
  const { age, setAge, players, setPlayers } = useRadioValues(config);
  // const { favorites, setFavorites, writeUserData, getFavData } = useFavorites(database, userAuth);
  const [shouldRewriteFavorite, setShouldRewriteFavorite] = rewriteFavorite;
  return (
    <Context.Provider value={
      {
        games, setGames,
        currentGames, setCurrentGames,
        filters,
        rerenderFilters, setRerenderFilters,
        onToggle,
        filtersObj, setFiltersObj,
        // deletedGames, setDeletedGames,
        rangeValue, setRangeValue,
        age, setAge, 
        players, setPlayers,
        config,
        userAuth, setUserAuth, 
        login, logout, errorLogin,
        isOpenUser, onToggleUser,
        writeUserData, favorites, setFavorites,
        shouldRewriteFavorite, setShouldRewriteFavorite,
        renderLoginFav, setRenderLoginFav
      }
    }>
      <ChakraProvider theme={extendedTheme}>
        <SomeLayer isOpen={isOpen} error={error}/>
      </ChakraProvider>
    </Context.Provider>
  );
}

export default App;
