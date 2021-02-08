import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/App.scss";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import LoginAndRegister from "./pages/login-and-register";
import CheckoutPage from "./pages/checkout";
import Header from "./components/header";

import { setCurrentUser } from "./redux/user/user.actions";
import { getAppProps } from "./redux/user/user.selectors";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.setCurrentUser();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/login">
            {this.props.currentUser ? <Redirect to="/" /> : <LoginAndRegister />}
          </Route>
          <Redirect path="*" to="/" />
        </Switch>
      </>
    );
  }
}

export default connect(getAppProps, { setCurrentUser })(App);
