import React from "react";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const { dataUser, handleLoginChange, handleLogin } =
    React.useContext(AuthContext);
  return (
    <div className="w-full sm:w-[600px] shadow-custom-blue p-8 rounded">
      <h1 className="text-2xl text-center font-bold my-2">
        Login to Join Chat Room
      </h1>
      <form onSubmit={(e) => handleLogin(e)} className="w-full sm:w-[500px]">
        <div>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded my-2 border border-2 border-blue-400"
            value={dataUser.name}
            onChange={(e) => handleLoginChange(e.target.name, e.target.value)}
            placeholder="input your name"
          />
        </div>
        <div>
          <input
            type="email"
            value={dataUser.email}
            name="email"
            className="w-full p-2 rounded my-2 border border-2 border-blue-400"
            onChange={(e) => handleLoginChange(e.target.name, e.target.value)}
            placeholder="input your email"
          />
        </div>
        <div>
          <button
            className="w-full bg-slate-800 py-3 text-white rounded mt-4"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
