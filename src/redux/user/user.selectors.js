import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);

/**
 * Selector to get the props for the App component
 *
 * @returns {object} with currentUser (selectCurrentUser).
 */
export const getAppProps = createSelector([selectCurrentUser], currentUser => ({
  currentUser,
}));
