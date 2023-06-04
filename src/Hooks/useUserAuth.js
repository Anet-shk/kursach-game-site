import { useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, getAuth, getRedirectResult } from "firebase/auth";

export function useUserAuth(app) {
  
  const [userAuth, setUserAuth] = useState(null);
  const [errorLogin, setErrorLogin] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);

  function login() {
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log({user})
      console.log({token})
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUserAuth(user)
    }).then(() => {
      console.warn('sign in - successfully')
    }).catch((error) => {
      // Handle Errors here.
      setErrorLogin(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(error)
      // ...
    });

    // getRedirectResult(auth).then((result) => {
    //   // This gives you a Google Access Token. You can use it to access Google APIs.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential.accessToken;

    //   // The signed-in user info.
    //   const user = result.user;
    //   setUserAuth(user);
    //   console.log({user})
    //   console.log({token})
    //   // IdP data available using getAdditionalUserInfo(result)
    //   // ...
    // }).then(() => {
    //   console.warn('sign in - successfully')
    // }).catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const email = error.customData.email;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  }

  function logout() {
    signOut(auth).then(() => {
      setUserAuth(null);
      console.warn('sign out - successfully');
    }).catch((e) => {
      console.error('sign out occurs an error');
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setUserAuth(user);
      } else {
        setUserAuth(null)
      }
    }, [userAuth])
  })

  return {userAuth, setUserAuth, login, logout, errorLogin};
}