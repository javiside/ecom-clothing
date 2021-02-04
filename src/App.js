import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import Header from "./components/header";
import LoginAndRegister from "./pages/login-and-register"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginAndRegister} />
      </Switch>
    </>
  );
}

export default App;
