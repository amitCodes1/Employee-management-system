import React from "react";

const Header = ({ changeUser }) => {

  const logout = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser(null);
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