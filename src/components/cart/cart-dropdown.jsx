import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./cart-item";
import { getCartDropdownProps } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "../../styles/cart/cart-dropdown.scss";

const CartDropdown = ({ cartItems, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Link className="custom-button" to="/checkout" onClick={toggleCartHidden}>
      GO TO CHECKOUT
    </Link>
  </div>
);

export default connect(getCartDropdownProps, { toggleCartHidden })(CartDropdown);
