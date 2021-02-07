import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.utils";
import CartIcon from "./cart/cart-icon";
import CartDropdown from "./cart/cart-dropdown";

import { getHeaderProps } from "../redux/header.selectors";

import { ReactComponent as Logo } from "../assets/crown.svg";

import "../styles/header.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            LOGOUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
  );
};

export default connect(getHeaderProps)(Header);
