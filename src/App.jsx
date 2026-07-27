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
      <Route path="/" element={<RoleSelection />} />

      <Route
        path="/admin-login"
        element={
          <LoginRoute>
            <AdminLogin setLoggedUser={setLoggedUser} />
          </LoginRoute>
        }
      />

      <Route
        path="/employee-login"
        element={
          <LoginRoute>
            <EmployeeLogin setLoggedUser={setLoggedUser} />
          </LoginRoute>
        }
      />

      <Route
        path="/admin"
        element={
          loggedUser?.role === "admin" ? (
            <AdminDashboard
              data={loggedUser.data}
              setLoggedUser={setLoggedUser}
            />
          ) : (
            <AdminLogin setLoggedUser={setLoggedUser} />
          )
        }
      />

      <Route
        path="/employee"
        element={
          loggedUser?.role === "employee" ? (
            <EmployeeDashboard
              data={loggedUser.data}
              setLoggedUser={setLoggedUser}
            />
          ) : (
            <EmployeeLogin setLoggedUser={setLoggedUser} />
          )
        }
      />

      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center bg-slate-900">
            <h1 className="text-4xl font-bold text-white">
              404 Page Not Found
            </h1>
          </div>
        }
      />
    </Routes>
  );
}

export default App;
