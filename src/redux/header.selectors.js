import { createSelector } from "reselect";

import { selectCurrentUser } from "./user/user.selectors";
import { selectCartHidden } from "./cart/cart.selectors";

/**
 * Selector to get the props needed for the header
 *
 * @returns {object} currentUser (selectCurrentUser) and hidden (selectCartHidden).
 */
export const getHeaderProps = createSelector(
  [selectCurrentUser, selectCartHidden],
  (currentUser, hidden) => ({
    currentUser,
    hidden,
  })
);
