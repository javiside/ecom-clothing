import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button";
import CartItem from "./cart-item";
import { getCartDropdownProps } from "../../redux/cart/cart.selectors";

import "../../styles/cart/cart-dropdown.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default connect(getCartDropdownProps)(CartDropdown);
