import { getDatabase, onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export function useFavorites(app, userAuth) {
  const [favorites, setFavorites] = useState('');
  const database = getDatabase(app);

  function getFavData()  {
    const userRef = ref(database, 'users/' + userAuth.uid);
    onValue(userRef, (snapshot) => {
      const userFavor = snapshot.val();
      setFavorites(userFavor);
      console.log('user get data', userFavor);
    })
  }

  function writeUserData() {
    set(ref(database, 'users/' + userAuth.uid), {
      favorites,
    });
  }

  return {favorites, setFavorites, writeUserData, getFavData}
}