import React from "react";
import { useState } from "react";
import axios from "axios";

const TokenLogin = () => {
  const [userAccount, setUserAccount] = useState({ id: "", password: "" });

  const changeAccountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "username") {
      setUserAccount({ ...userAccount, id: e.target.value });
    } else {
      setUserAccount({ ...userAccount, password: e.target.value });
    }
  };

  const Login = () => {
    axios.post(
      "http://localhost:4000/login",
      { userAccount },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="Username"
          onChange={changeAccountInput}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          onChange={changeAccountInput}
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-stone-400 hover:bg-blue-dark  font-bold py-2 px-4 rounded"
          type="button"
          onClick={Login}
        >
          Sign In
        </button>
        <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default TokenLogin;
