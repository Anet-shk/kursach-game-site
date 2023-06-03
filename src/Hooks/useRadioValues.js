import { useState } from "react";


export function useRadioValues(init) {
  
  const [ age, setAge ] = useState(20);
  const [ players, setPlayers ] = useState(1);

  return { age, setAge, players, setPlayers }
}