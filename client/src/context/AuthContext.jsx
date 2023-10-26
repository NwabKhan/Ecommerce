import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const updateIsAuth = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider value={{ isAuth, updateIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { useAuthContext, AuthContextProvider };
