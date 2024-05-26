import { createContext, useContext, useReducer, useState } from "react";
import { userReducer } from "./userReducer";

const AuthContext = createContext(null);
const intialState = { // it can be array or a object
  isLoggedIn: false,
  isAdmin: true
}
export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, intialState);
  const doLogin = () => {
    dispatch({
      type: 'login',
      payload: { login: true}
    })
  }
  const doLogout = () => {
    dispatch({
      type: 'logout',
      payload: { login: false}
    })
  }
  return (
    <AuthContext.Provider value={{
        ...state,
        doLogin,
        doLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  // read the conntext
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used in AuthProvider");
  }

  return context;
};
