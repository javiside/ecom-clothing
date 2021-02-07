import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);

export const getCartIconProps = createSelector([selectCartItemsCount], itemCount => ({
  itemCount,
}));

export const getCartDropdownProps = createSelector([selectCartItems], cartItems => ({
  cartItems,
}));

export const getCheckoutProps = createSelector(
  [selectCartItems, selectCartTotal],
  (cartItems, total) => ({
    cartItems,
    total,
  })
);
