import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  // const user = { displayName: "samiha tasnim" };
  // const user = null;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // it will be used in Register.jsx file
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // it will be used in Login.jsx file
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    // onAuthStateChanged(auth, (loggedInUser) => {
    //   console.log("logged in user inside auth state observer", loggedUser);
    //   setUser(loggedInUser);
    // });

    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user inside auth state observer", loggedUser);
      // console.log(loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });
    // return unsubscribe();
    return () => {
      unsubscribe();
    };
  }, [user]);

  // it will be used in NavigationBar.jsx file
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createUser,
    signInUser,
    logOutUser,
    loading,
  };

  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
