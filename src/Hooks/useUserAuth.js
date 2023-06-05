import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getAuth, getRedirectResult } from "firebase/auth";
import { getDatabase, onValue, ref } from "firebase/database";

export function useUserAuth(app, renderLoginFav, setRenderLoginFav) {
  const database = getDatabase(app);
  const [userAuth, setUserAuth] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [favorites, setFavorites] = useState('');

  function login() {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUserAuth(user)
      return user
    }).then((user) => {
      const userRef = ref(database, 'users/' + user.uid);
      onValue(userRef, (snapshot) => {
        const userFavor = snapshot.val();
        setFavorites(userFavor.favorites);
        console.log('user get data', userFavor);
        setRenderLoginFav(() => renderLoginFav + 1)
      })
      console.warn('sign in - successfully')
    }).catch((error) => {
      setErrorLogin(error);
      console.error(error);
    });
  }

  function logout() {
    signOut(auth).then(() => {
      setUserAuth(null);
      console.warn('sign out - successfully');
    }).catch((e) => {
      console.error('sign out occurs an error');
    })
  }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       setUserAuth(user);
  //     } else {
  //       setUserAuth(null)
  //     }
  //   }, [userAuth])
  // })

  return {userAuth, setUserAuth, login, logout, errorLogin, favorites, setFavorites, };
}