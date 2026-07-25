import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-medium">
          Hello,
        </h1>

        <h2 className="text-4xl font-semibold">
          Admin 👋
        </h2>
      </div>

      <button
        onClick={logout}
        className="rounded bg-red-500 px-5 py-2 text-lg font-medium hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;