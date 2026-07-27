import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ data, setLoggedUser }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedUser(null);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between bg-slate-800 p-4 rounded-xl">
      <h1 className="text-xl font-bold text-white">
        Welcome, {data?.firstName}
      </h1>
      <button
        onClick={logout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
