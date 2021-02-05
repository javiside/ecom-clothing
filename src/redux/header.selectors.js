import { createSelector } from "reselect";

import { selectCurrentUser } from "./user/user.selectors";
import { selectCartHidden } from "./cart/cart.selectors";

export const getHeaderProps = createSelector(
  [selectCurrentUser, selectCartHidden],
  (currentUser, hidden) => ({
    currentUser,
    hidden,
  })
);
