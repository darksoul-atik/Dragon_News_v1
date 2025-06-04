import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { AuthContext } from "../Contexts/AuthContext";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  //User Tracking State
  const [user, setUser] = useState(null);
  const [loading,setLoading] =useState(true)

  //Login Functionality
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Register Functionality
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //SignOut Functionality
  const logOut = () => {
    return signOut(auth);
  };

  //GitHub Login 
  const gitHubLogin = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth,githubProvider)
   
  };

  //Google Login 
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleProvider);
  };

  //Update User
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser , updatedData);
  };

  //Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Context Values
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,
    gitHubLogin,
    googleLogin,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
