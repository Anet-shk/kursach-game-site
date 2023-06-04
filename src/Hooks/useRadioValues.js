import { useState } from "react";


export function useRadioValues(config) {
  
  const [ age, setAge ] = useState(config.checkRange.age.default);
  const [ players, setPlayers ] = useState(config.checkRange.players.default);

  return { age, setAge, players, setPlayers }
}