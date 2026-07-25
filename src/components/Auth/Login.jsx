import React, { useState } from "react";

const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };


  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-100">

      <div className="w-[400px] rounded-2xl bg-white p-8 shadow-lg">

        <h1 className="mb-6 text-3xl font-bold text-center">
          Employee Login
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 border rounded-lg outline-none focus:border-emerald-500"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-3 border rounded-lg outline-none focus:border-emerald-500"
            required
          />


          <button
            className="py-3 font-semibold text-white rounded-lg bg-emerald-500 hover:bg-emerald-600"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;