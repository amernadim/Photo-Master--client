import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user ,setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email,password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const googleSingIn = () => { 
    return signInWithPopup(auth, googleProvider)
  }
  const updateUserProfile = profile => {
    return updateProfile(auth.currentUser,profile)
  }

  useEffect( () =>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser);
      setUser(currentUser);
   });
  return () =>{
      return unsubscribe();
  }
}, [])

  const authInfo = {
    user, 
    createUser ,
    login,
    logOut,
    googleSingIn,
    updateUserProfile
  }

  return (
    <div>
     <AuthContext.Provider value={authInfo}> 
      {children}
    </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;






