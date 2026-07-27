import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("emsEmployees");

    if (!storedEmployees) {
      setLocalStorage();
    }

    const data = getLocalStorage();
    setEmployees(data.employees);
  }, []);

  useEffect(() => {
    if (employees.length > 0) {
      localStorage.setItem("emsEmployees", JSON.stringify({ employees }));

      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        const updated = employees.find(
          (emp) => emp.id === loggedInUser.data.id
        );
        if (updated) {
          localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ ...loggedInUser, data: updated })
          );
        }
      }
    }
  }, [employees]);

  return (
    <AuthContext.Provider value={[employees, setEmployees]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
