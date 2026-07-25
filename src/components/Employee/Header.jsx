import React from "react";

const Header = ({ data, changeUser }) => {

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#232323] p-6 shadow-lg">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold">
          {data.firstName.charAt(0)}
        </div>

        <div>

          <h2 className="text-3xl font-bold">
            Welcome, {data.firstName}
          </h2>

          <p className="mt-1 text-gray-400">
            {today}
          </p>

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="rounded-lg bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
      >
        Logout
      </button>

    </div>
  );
};

export default Header;