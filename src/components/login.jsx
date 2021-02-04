import React from "react";

import FormInput from "./form-input";
import CustomButton from "./custom-button";

import "./login.scss";

class Login extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="login">
        <h2>I already have an account</h2>
        <span>Login with your email and password</span>
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
            requierd
          />

          <CustomButton type="submit">Login</CustomButton>
        </form>
      </div>
    );
  }
}

export default Login;
