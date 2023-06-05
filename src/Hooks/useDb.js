import { useState, useEffect } from "react";
import { getDatabase, onValue, ref, set  } from "firebase/database";

export function useDb(app) {
    const [games, setGames] = useState({});
    const [filters, setFilters] = useState({});
    const [error, setError] = useState(null);
    const database = getDatabase(app);

    function getFiltersData() {
      const filtersRef = ref(database, 'filters/');
      onValue(filtersRef, (snapshot) => {
        const filters = snapshot.val();
        setFilters(filters);
        console.log('filters', filters);
      })
    }

    function getGamesData() {
      const gamesRef = ref(database, 'games/');
      onValue(gamesRef, (snapshot) => {
        const games = snapshot.val();
        setGames(games);
        console.log('games', games);
      })
    }

    useEffect(() => {
      (async () => {
        try {
          getGamesData();
          getFiltersData();
        } catch (err) {
          console.log('err: ', err);
          setError(err);
        }
      })()
    }, [])

    return { database, games, setGames, error, filters}
}