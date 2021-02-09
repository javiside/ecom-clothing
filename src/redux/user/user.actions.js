import { UserActionTypes } from "./user.types";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const storeUnsubscribeFromAuth = unsubscribeFromAuth => ({
  type: UserActionTypes.STORE_UNSUBSCRIBE_FROM_AUTH,
  payload: unsubscribeFromAuth,
});

export const callUnsubscribeFromAuth = () => ({
  type: UserActionTypes.CALL_UNSUBSCRIBE_FROM_AUTH,
});

const setCurrentUserStart = () => ({
  type: UserActionTypes.SET_USER_START,
});

const setCurrentUserSuccess = user => ({
  type: UserActionTypes.SET_USER_SUCCESS,
  payload: user,
});

const setCurrentUserFailure = errorMessage => ({
  type: UserActionTypes.SET_USER_FAILURE,
  payload: errorMessage,
});

export const setCurrentUser = () => {
  return dispatch => {
    try {
      const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
      dispatch(storeUnsubscribeFromAuth(unsubscribeFromAuth));
    } catch (err) {
      dispatch(setCurrentUserFailure(err.message));
    }
  };
};
