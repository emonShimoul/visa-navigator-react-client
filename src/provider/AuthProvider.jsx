import { createContext } from "react";

export const AuthContext = createContext();

const authInfo = { myObj: "Hello" };

const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
