import { useState } from "react";


export function useCurrentGames(response) {
  let currentGamesArr = [];
  console.log(response)
  if (response.games) currentGamesArr = Object.keys(response.games);
  console.log(currentGamesArr)

  const [currentGames, setCurrentGames] = useState(currentGamesArr);
  console.log(currentGames)

  return {currentGames, setCurrentGames};
}