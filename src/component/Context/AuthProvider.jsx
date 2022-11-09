import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user ,setUser] = useState(null);
  const [loading,setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider()
  // user create
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // login by email and password
  const login = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logout
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("photoMaster-token");
    return signOut(auth)
  }
  // Login by Google
  const googleSingIn = () => { 
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }
 // update name and photo url
  const updateUserProfile = profile => {
    setLoading(true);
    return updateProfile(auth.currentUser,profile)
  }
 //onAuth Satate change 
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

 // Auth inro
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






