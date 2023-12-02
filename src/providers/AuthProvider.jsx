import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

function AuthProvider({ children }) {
  // const user = { displayName: "samiha tasnim" };
  const user = null;
  const authInfo = {
    user,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
