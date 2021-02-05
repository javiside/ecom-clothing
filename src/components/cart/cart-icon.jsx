import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/cart/cart.actions.js";
import { getCartIconProps } from "../../redux/cart/cart.selectors.js";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "../../styles/cart/cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

export default connect(getCartIconProps, { toggleCartHidden })(CartIcon);
