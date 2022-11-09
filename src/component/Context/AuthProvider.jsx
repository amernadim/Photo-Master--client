import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user ,setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("photoMaster-token");
    return signOut(auth)
  }

  const googleSingIn = () => { 
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
  const updateUserProfile = profile => {
    setLoading(true);
    return updateProfile(auth.currentUser,profile)
  }

  useEffect( () =>{
   const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
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
    updateUserProfile,
    loading,
    setLoading
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






