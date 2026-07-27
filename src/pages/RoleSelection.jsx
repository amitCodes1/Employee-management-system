import React from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, UserRound } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl">

        <div className="text-center mb-12">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Employee Management System
          </h1>

          <p className="text-gray-300 mt-4 text-base sm:text-lg">
            Select your portal to continue
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Admin Card */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300">

            <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center mx-auto">

              <ShieldCheck size={42} className="text-white" />

            </div>

            <h2 className="text-center text-white text-3xl font-bold mt-6">
              Admin Portal
            </h2>

            <p className="text-center text-gray-300 mt-4 leading-7">
              Manage employees, assign tasks, monitor progress and control the entire system.
            </p>

            <button
              onClick={() => navigate("/admin-login")}
              className="w-full mt-8 bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-lg font-semibold text-white transition"
            >
              Login as Admin
            </button>

          </div>

          {/* Employee Card */}

          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-105 transition duration-300">

            <div className="w-20 h-20 rounded-2xl bg-green-600 flex items-center justify-center mx-auto">

              <UserRound size={42} className="text-white" />

            </div>

            <h2 className="text-center text-white text-3xl font-bold mt-6">
              Employee Portal
            </h2>

            <p className="text-center text-gray-300 mt-4 leading-7">
              Check your assigned tasks, update progress and complete your daily work.
            </p>

            <button
              onClick={() => navigate("/employee-login")}
              className="w-full mt-8 bg-green-600 hover:bg-green-700 py-3 rounded-xl text-lg font-semibold text-white transition"
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