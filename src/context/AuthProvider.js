import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [isLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{
        isLoggedIn 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  // fetch the conntext
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used in AuthProvider");
  }

  return context;
};
