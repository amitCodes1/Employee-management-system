import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import RoleSelection from "./pages/RoleSelection";
import AdminLogin from "./pages/AdminLogin";
import EmployeeLogin from "./pages/EmployeeLogin";

import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

import LoginRoute from "./routes/LoginRoute";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");

    if (user) {
      setLoggedUser(JSON.parse(user));
    }
  }, []);

  return (
    <Routes>

      <Route
        path="/"
        element={<RoleSelection />}
      />

      <Route
        path="/admin-login"
        element={
          <LoginRoute>
            <AdminLogin
              setLoggedUser={setLoggedUser}
            />
          </LoginRoute>
        }
      />

      <Route
        path="/employee-login"
        element={
          <LoginRoute>
            <EmployeeLogin
              setLoggedUser={setLoggedUser}
            />
          </LoginRoute>
        }
      />

      <Route
        path="/admin"
        element={
          loggedUser ? (
            <AdminDashboard
              changeUser={setLoggedUser}
            />
          ) : (
            <AdminLogin
              setLoggedUser={setLoggedUser}
            />
          )
        }
      />

      <Route
        path="/employee"
        element={
          loggedUser ? (
            <EmployeeDashboard
              data={loggedUser}
              changeUser={setLoggedUser}
            />
          ) : (
            <EmployeeLogin
              setLoggedUser={setLoggedUser}
            />
          )
        }
      />

      <Route
        path="*"
        element={
          <h1 className="text-center text-3xl mt-20">
            404 Page Not Found
          </h1>
        }
      />

    </Routes>
  );
}

export default App;