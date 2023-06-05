import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export function useFavorites(app, userAuth) {
  const database = getDatabase(app);

  function writeUserData(favorites) {
    set(ref(database, 'users/' + userAuth.uid), {
      favorites,
    });
  }

  return {writeUserData}
}