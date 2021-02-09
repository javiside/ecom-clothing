import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: {},
  isCollectionFetching: true,
  errorMessage: null,
  unsubscribeFromSnapShot: () => {},
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.STORE_UNSUBSCRIBE_FROM_SNAPSHOT:
      return {
        ...state,
        unsubscribeFromSnapShot: action.payload,
      };
    case ShopActionTypes.CALL_UNSUBSCRIBE_FROM_SNAPSHOT:
      state.unsubscribeFromSnapShot();
      return state;
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isCollectionFetching: true,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isCollectionFetching: false,
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isCollectionFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
