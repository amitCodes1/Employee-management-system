import { Navigate } from "react-router-dom";


const LoginRoute = ({children}) => {


  const user = localStorage.getItem("loggedInUser");


  // agar already login hai to dashboard bhej do

  if(user){

    const data = JSON.parse(user);


    if(data.role === "admin"){

      return <Navigate to="/admin" />;

    }


    return <Navigate to="/employee" />;


  }



  // login page allow

  return children;


};


export default LoginRoute;