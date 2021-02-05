import React from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";

import "./login.scss";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "", error: "" });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, error } = this.state;
    return (
      <div className="login">
        <h2>I already have an account</h2>
        <span>Login with your email and password</span>
        <span className="login-error">{error.toUpperCase()}</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
            required
            autoComplete="on"
          />
          <div className="buttons">
            <CustomButton type="submit">LOGIN</CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
