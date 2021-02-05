import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../firebase/firebase.utils";

import { ReactComponent as Logo } from "../assets/crown.svg";

import "./header.scss";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {props.currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            LOGOUT
          </div>
        ) : (
          <Link className="option" to="/login">
            LOGIN
          </Link>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps)(Header);
