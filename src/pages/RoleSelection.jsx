import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, UserRound } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  const openAdminLogin = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/admin-login");
  };

  const openEmployeeLogin = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/employee-login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl">

        <div className="text-center mb-12">

          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Employee Management System
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Select your portal to continue
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <div className="w-20 h-20 mx-auto rounded-2xl bg-blue-600 flex items-center justify-center">

              <ShieldCheck size={42} className="text-white" />

            </div>

            <h2 className="text-center text-3xl font-bold text-white mt-6">
              Admin Portal
            </h2>

            <p className="text-center text-gray-300 mt-4">
              Manage employees, assign tasks and monitor progress.
            </p>

            <button
              onClick={openAdminLogin}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
            >
              Login as Admin
            </button>

          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

            <div className="w-20 h-20 mx-auto rounded-2xl bg-green-600 flex items-center justify-center">

              <UserRound size={42} className="text-white" />

            </div>

            <h2 className="text-center text-3xl font-bold text-white mt-6">
              Employee Portal
            </h2>

            <p className="text-center text-gray-300 mt-4">
              View your tasks and update your work progress.
            </p>

            <button
              onClick={openEmployeeLogin}
              className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
            >
              Login as Employee
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RoleSelection;