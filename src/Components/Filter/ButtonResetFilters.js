import { Box, useConst } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../../Functions/context";


export function ButtonResetFilters() {

  const {
    age, setAge, 
    players, setPlayers,
    config, 
    rerenderFilters, setRerenderFilters,
    filtersObj, setFiltersObj
  } = useContext(Context);

  const currentObj = {age: {value: age, setValue: setAge}, players: {value: players, setValue: setPlayers}};

  return (
    <Box 
      as="input"
      type="button"
      width={'20%'}
      p={2}
      m={2}
      borderRadius={10}
      cursor={'pointer'}
      fontSize={'l'}
      value={'Скинути фільтри'}
      onClick={e => {
        e.preventDefault();

        Object.keys(config.checkRadio).forEach(key => {

          document.getElementById(key).checked = config.checkRadio[key];

          setFiltersObj(() => {
            filtersObj.checkRadio[key] = config.checkRadio[key];
            return filtersObj;
          })

        });

        Object.keys(config.checkRange).forEach(key => {

          currentObj[key].setValue(config.checkRange[key].default);

          // setFiltersObj(() => {
          //   filtersObj.checkRange[key].value = config.checkRange[key].default;
          //   return filtersObj;
          // })

        });

        setRerenderFilters(() => rerenderFilters + 1)
      }}
    />
  )
}