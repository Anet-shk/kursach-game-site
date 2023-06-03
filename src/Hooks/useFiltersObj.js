import { useState } from "react";

export function useFiltersObj(filters) {

  function Initial(filters) {
    this.checkRadio = {};
    this.checkRange = {};
    this.search = '';

    Object.keys(filters).forEach(el => {
      if (typeof filters[el] !== 'object') {
        this.checkRadio[el] = false;
      } else {
        this.checkRange[el] = {
          min: 0,
          max: Infinity,
          value: 5,
        }
      }
      return el
    })
  }

  const [filtersObj, setFiltersObj] = useState(new Initial(filters));

  console.log(filtersObj);

  return {filtersObj, setFiltersObj};
}