import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setLocalStorage();

    const data = getLocalStorage();

    setUserData(data.employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;