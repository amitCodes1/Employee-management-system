import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";

const Login = ({ role, setLoggedUser }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { employees, admin } = getLocalStorage();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === "admin") {
      const adminUser = admin.find(
        (item) =>
          item.email === email &&
          item.password === password
      );

      if (!adminUser) {
        alert("Invalid Admin Email or Password");
        return;
      }

      const loggedUserData = {
        role: "admin",
        data: adminUser,
      };

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(loggedUserData)
      );

      setLoggedUser(loggedUserData);

      navigate("/admin");

      return;
    }

    if (role === "employee") {
      const employeeUser = employees.find(
        (item) =>
          item.email === email &&
          item.password === password
      );

      if (!employeeUser) {
        alert("Invalid Employee Email or Password");
        return;
      }

      const loggedUserData = {
        role: "employee",
        data: employeeUser,
      };

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(loggedUserData)
      );

      setLoggedUser(loggedUserData);

      navigate("/employee");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800">
          {role === "admin"
            ? "Admin Login"
            : "Employee Login"}
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Employee Management System
        </p>

        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-5"
        >
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        {role === "admin" && (
          <div className="mt-8 rounded-xl bg-blue-50 p-4 border border-blue-200">

            <h2 className="font-bold text-lg text-blue-700 mb-2">
              Demo Admin Account
            </h2>

            <p>
              <strong>Email:</strong> admin@gmail.com
            </p>

            <p>
              <strong>Password:</strong> admin123
            </p>

          </div>
        )}

        {role === "employee" && (
          <div className="mt-8 rounded-xl bg-gray-100 p-4">

            <h2 className="text-lg font-bold mb-4">
              Demo Employee Accounts
            </h2>

            <div className="space-y-3 max-h-72 overflow-y-auto">

              {employees.map((employee) => (
                <div
                  key={employee.id}
                  className="bg-white rounded-xl shadow p-3"
                >
                  <p>
                    <strong>Name:</strong> {employee.firstName}
                  </p>

                  <p>
                    <strong>Email:</strong> {employee.email}
                  </p>

                  <p>
                    <strong>Password:</strong> {employee.password}
                  </p>
                </div>
              ))}

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default Login;