import { useState } from "react";


export function useRange(filters) {

  const initial = {
    age: 20,
    players: 1
  }

  /**ToDo create initial and current value for this initial[key] */

  const arrayOfFiltersRange = Object.keys(filters).map(key => { 
    if (typeof filters[key] === 'object') {
      // initial[key] = initial[key];
      return key
    }
  });

  const [rangeValue, setRangeValue] = useState(initial);

  return { rangeValue, setRangeValue }
}