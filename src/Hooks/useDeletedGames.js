import { useState } from "react";

export function useDeletedGames() {
  
  const [deletedGames, setDeletedGames] = useState({});

  return {deletedGames, setDeletedGames};
}