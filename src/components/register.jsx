import React, { useState } from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import "../styles/register.scss";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const { displayName, email, password, confirmPassword } = userInfo;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      setUserInfo({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch ({ message }) {
      setError(message);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <div className="register">
      <h2 className="title">I do not have an account</h2>
      <span className="title">I do not have an account</span>
      <span className="register-error">{error.toUpperCase()}</span>
      <form className="register-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          autoComplete="on"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          autoComplete="on"
          required
        />
        <CustomButton type="submit">REGISTER</CustomButton>
      </form>
    </div>
  );
};

export default Register;
