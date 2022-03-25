import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey:'AIzaSyCWTqH0T1Oe96GBSrukTk2nLeIpw0BHN4k',
  authDomain: "chungus-611ed.firebaseapp.com",
  projectId: "chungus-611ed",
  storageBucket: "chungus-611ed.appspot.com",
  messagingSenderId: "207013304426",
  appId: "1:207013304426:web:16dd9fdd960e993fadd213",
  measurementId: "G-GDQRZDZDSQ"
});

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}

export const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
export const db = getFirestore(firebaseApp);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};