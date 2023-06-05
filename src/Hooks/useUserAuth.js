import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getAuth, getRedirectResult } from "firebase/auth";

export function useUserAuth(app) {
  
  const [userAuth, setUserAuth] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  function login() {
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user;
      setUserAuth(user)
    }).then(() => {
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

  return {userAuth, setUserAuth, login, logout, errorLogin};
}