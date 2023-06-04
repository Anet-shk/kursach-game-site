import { Flex } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { Collapse } from "@chakra-ui/react";
import { GroupButtons } from "./checkRadio/GroupButtons";
import { GroupRange } from "./checkRange/GroupRange";
import { Context } from "../../Functions/context";
import { ButtonResetFilters } from "./ButtonResetFilters";

export function Filter({isOpen}) {
  
  const {
    age, players,
    games, setGames, 
    currentGames, setCurrentGames, 
    filtersObj, setFiltersObj,
    rerenderFilters
  } = useContext(Context);

  

  // useEffect(() => {
  //   setFiltersObj(() => {
  //     filtersObj.isFilterOn = isOpen;
  //     return filtersObj;
  //   })
  // }, [filtersObj, isOpen, setFiltersObj]);

  useEffect(() => {
    const gamesKeys = Object.keys(games);
    if (!gamesKeys[0]) return;
    if (!filtersObj.checkRadio) {filtersObj.checkRadio = {}};
    
    const checkRadioKeys = Object.keys(filtersObj.checkRadio).filter((key) => filtersObj.checkRadio[key]);
    const checkRangeKeys = Object.keys(filtersObj.checkRange);

    const newCurrentGame = gamesKeys.reduce((accumObj, currentGameKey) => {
      let controlFlag = true;

      // filter by radio buttons
      checkRadioKeys.forEach(key => {
        if(!games[currentGameKey][key]) controlFlag = false;
      })

      // filter by range sliders
      checkRangeKeys.forEach(key => {

        if (!games[currentGameKey][key].min) {
          setGames(() => {
            games[currentGameKey][key].min = 0;
            return games;
          })
        }
        if (!games[currentGameKey][key].max) {
          setGames(() => {
            games[currentGameKey][key].max = Infinity;
            return games;
          })
        }
        
        if ((games[currentGameKey][key].min > filtersObj.checkRange[key].value && filtersObj.checkRange[key].value != 0) || 
            filtersObj.checkRange[key].value > games[currentGameKey][key].max) {
              controlFlag = false;
        }

      })

      // filter by search in Header
      if (filtersObj.search.trim()) {
        const currentRegExp = new RegExp(`${filtersObj.search}`, 'uig');

        if (!games[currentGameKey].name.match(currentRegExp)) {
          controlFlag = false;
        }

      }

      
      // if pass all filters => write to accumulator object
      if (controlFlag) accumObj[currentGameKey] = games[currentGameKey];
      return accumObj;
    }, {});

    setCurrentGames(newCurrentGame);

  }, [filtersObj, games, setCurrentGames, rerenderFilters, setGames, age, players])
  
  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        w={['100%', '90%', '85%', '85%', '80%']}
        maxW={'1200px'}
        m={'auto'}
        p={'10px'}
        border={'1px solid black'}
        borderColor={'mainBorderColor'}
        flexDir={'column'}
        alignItems={'center'}
      >
        <Flex
          as="ul"
          listStyleType={'none'}
          textDecoration={'none'}
          minW={'10px'}
          width={'100%'}
          justifyContent={'space-around'}
          maxH={'95px'}
          p={2}
        >
          <GroupButtons />
          <GroupRange />
        </Flex>
        <ButtonResetFilters />
      </Flex>
    </Collapse>
  )
}