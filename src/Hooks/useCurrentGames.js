import { useState } from "react";


export function useCurrentGames(initial) {

  const [currentGames, setCurrentGames] = useState(initial);

  return {currentGames, setCurrentGames};
}