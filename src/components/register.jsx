import React from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import "../styles/register.scss";

class Register extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        error: "",
      });
    } catch ({ message }) {
      this.setState({ error: message });
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword, error } = this.state;
    return (
      <div className="register">
        <h2 className="title">I do not have an account</h2>
        <span className="title">I do not have an account</span>
        <span className="register-error">{error.toUpperCase()}</span>
        <form className="register-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            autoComplete="on"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            autoComplete="on"
            required
          />
          <CustomButton type="submit">REGISTER</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
