import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import { AuthContext } from "./context/AuthProvider";
import { getLocalStorage } from "./utils/localStorage";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Employee/EmployeeDashboard";

const App = () => {

  const [userData] = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const [loggedUserData, setLoggedUserData] = useState(null);


  useEffect(() => {

    const loggedUser = localStorage.getItem("loggedInUser");

    if (loggedUser) {
      const data = JSON.parse(loggedUser);

      setUser({
        role: data.role
      });

      setLoggedUserData(data.data);
    }

  }, []);


  const handleLogin = (email, password) => {

    const { admin } = getLocalStorage();


    const adminUser = admin.find(
      (user) =>
        user.email === email &&
        user.password === password
    );


    if (adminUser) {

      setUser({
        role: "admin"
      });

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin"
        })
      );

      return;
    }



    const employee = userData.find(
      (user) =>
        user.email === email &&
        user.password === password
    );


    if (employee) {

      setUser({
        role: "employee"
      });

      setLoggedUserData(employee);


      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "employee",
          data: employee
        })
      );

      return;
    }


    alert("Invalid Email or Password");

  };


  return (

    <>
      {!user && (
        <Login handleLogin={handleLogin} />
      )}


     {user?.role === "admin" && (
  <AdminDashboard changeUser={setUser} />
)}


      {user?.role === "employee" && (
  <EmployeeDashboard
    data={loggedUserData}
    changeUser={setUser}
  />
)}

    </>

  );
};


export default App;