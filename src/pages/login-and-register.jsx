import React from "react";

import Login from "../components/login";
import Register from "../components/register";

import "./login-and-register.scss";

const LoginAndRegister = () => (
  <div className="login-and-register">
    <Login />
    <Register />
  </div>
);

export default LoginAndRegister;
