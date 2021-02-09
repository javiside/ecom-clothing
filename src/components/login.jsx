import React, { useState } from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

import "../styles/login.scss";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUserInfo({ email: "", password: "" });
    } catch ({ message }) {
      setError(message);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="login">
      <h2 className="heading">I already have an account</h2>
      <span className="title">Login with your email and password</span>
      <span className="login-error">{error.toUpperCase()}</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
          autoComplete="on"
        />
        <div className="buttons">
          <CustomButton type="submit">LOGIN</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Login;
