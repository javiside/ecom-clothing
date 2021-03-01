import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

/**
 * Selector to get the number of items on the cart
 *
 * @returns {number} count of the items on the cart.
 */
const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);

/**
 * Selector to get the total price for the items on the cart
 *
 * @returns {number} total amount (USD) for the items on the cart.
 */
const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.quantity * cartItem.price, 0)
);

/**
 * Selector to get the props for the cart-icon component
 *
 * @returns {object} with itemCount (selectCartItemsCount).
 */
export const getCartIconProps = createSelector([selectCartItemsCount], itemCount => ({
  itemCount,
}));

/**
 * Selector to get the props for the cart-dropdown component
 *
 * @returns {object} with cartItems (selectCartItems).
 */
export const getCartDropdownProps = createSelector([selectCartItems], cartItems => ({
  cartItems,
}));

/**
 * Selector to get the props for the checkout component
 *
 * @returns {object} with cartItems (selectCartItems) and total (selectCartTotal).
 */
export const getCheckoutProps = createSelector(
  [selectCartItems, selectCartTotal],
  (cartItems, total) => ({
    cartItems,
    total,
  })
);
