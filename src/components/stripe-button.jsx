import React from "react";
import { connect } from "react-redux";

import StripeCheckout from "react-stripe-checkout";

import { clearCart } from "../redux/cart/cart.actions";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51II0wyBqDul061WqnK9Yu7F9dwretAnGlMxKp0K01A0D6KT8NlBeGjGyG3IPx74iXENQvBktfwFOW98BfCZuIZ9S007Gg1QRhh";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecom Clothing"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={clearCart}
      stripeKey={publishableKey}
    />
  );
};

export default connect(null, { clearCart })(StripeCheckoutButton);
