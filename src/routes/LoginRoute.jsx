import { Navigate } from "react-router-dom";

const LoginRoute = ({ children }) => {
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    return children;
  }

  const loggedUser = JSON.parse(user);

  if (loggedUser.role === "admin") {
    return <Navigate to="/admin" replace />;
  }

  if (loggedUser.role === "employee") {
    return <Navigate to="/employee" replace />;
  }

  localStorage.removeItem("loggedInUser");

  return children;
};

export default LoginRoute;