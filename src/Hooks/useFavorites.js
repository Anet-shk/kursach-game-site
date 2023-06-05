import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

export function useFavorites(database, userAuth) {
  const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   const userRef = ref(database, 'users/' + userAuth.uid);
  //   onValue(userRef, (snapshot) => {
  //     const userFavor = snapshot.val();
  //     setFavorites(userFavor);
  //     console.log('user', userFavor);
  //   })
  // }, []);

  function getFavData()  {
    if (!userAuth) {
      console.log('absent userer Auth in usefav.js')
    }
    const userRef = ref(database, 'users/' + userAuth.uid);
    onValue(userRef, (snapshot) => {
      const userFavor = snapshot.val();
      setFavorites(userFavor);
      console.log('user', userFavor);
    })
  }

  
  function writeUserData() {
    set(ref(database, 'users/' + userAuth.uid), {
      favorites,
    });
  }

  return {favorites, setFavorites, writeUserData, getFavData}
}