import { UserActionTypes } from "./user.types";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const setCurrentUserStart = () => ({
  type: UserActionTypes.SET_USER_START,
});

export const setCurrentUserSuccess = user => ({
  type: UserActionTypes.SET_USER_SUCCESS,
  payload: user,
});

export const setCurrentUserFailure = errorMessage => ({
  type: UserActionTypes.SET_USER_FAILURE,
  payload: errorMessage,
});

export const setCurrentUser = () => {
  return dispatch => {
    try {
      auth.onAuthStateChanged(async userAuth => {
        dispatch(setCurrentUserStart(userAuth));

        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            dispatch(
              setCurrentUserSuccess({
                id: snapShot.id,
                ...snapShot.data(),
              })
            );
          });
        } else {
          dispatch(setCurrentUserSuccess(userAuth));
        }
      });
    } catch (err) {
      dispatch(setCurrentUserFailure(err.message));
    }
  };
};
