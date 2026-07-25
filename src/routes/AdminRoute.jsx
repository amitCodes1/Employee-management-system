import React from "react";
import { Navigate } from "react-router-dom";


const AdminRoute = ({children}) => {

  const user = localStorage.getItem("loggedInUser");


  if(!user){
    return <Navigate to="/" />;
  }


  const loggedUser = JSON.parse(user);


  if(loggedUser.role !== "admin"){
    return <Navigate to="/" />;
  }


  return children;

};


export default AdminRoute;