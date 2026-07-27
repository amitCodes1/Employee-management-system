import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ setLoggedUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedUser(null);
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-gray-400 text-lg">Welcome Back</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          Admin 👋
        </h1>
      </div>

      <button
        onClick={logout}
        className="
          bg-red-600
          hover:bg-red-700
          px-6
          py-3
          rounded-lg
          font-semibold
          transition
        "
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
