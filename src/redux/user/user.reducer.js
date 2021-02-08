import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isUserFetching: false,
  errorMessage: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_USER_START:
      return {
        ...state,
        isUserFetching: true,
      };
    case UserActionTypes.SET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isUserFetching: false,
      };
    case UserActionTypes.SET_USER_FAILURE:
      return {
        ...state,
        isUserFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
