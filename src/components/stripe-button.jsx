import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51II0wyBqDul061WqnK9Yu7F9dwretAnGlMxKp0K01A0D6KT8NlBeGjGyG3IPx74iXENQvBktfwFOW98BfCZuIZ9S007Gg1QRhh";

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ecom Clothing"
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
