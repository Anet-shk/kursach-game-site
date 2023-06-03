import { useEffect, useState } from "react";

export function useFetch() {
    const [games, setGames] = useState({});
    const [filters, setFilters] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const json = await fetch('database.json');
                const res = await json.json();
                setGames(res.games);
                setFilters(res.filters);
            } catch (err) {
                console.log('err: ', err);
                setError(err);
            }
        })()
    }, [])

    return { games, setGames, error, filters }
}