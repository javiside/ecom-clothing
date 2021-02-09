import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

const storeUnsubscribeFromSnapshot = unsubscribeFromSnapshot => ({
  type: ShopActionTypes.STORE_UNSUBSCRIBE_FROM_SNAPSHOT,
  payload: unsubscribeFromSnapshot,
});

export const callUnsubscribeFromSnapshot = () => ({
  type: ShopActionTypes.CALL_UNSUBSCRIBE_FROM_SNAPSHOT,
});

const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollections = () => {
  return dispatch => {
    try {
      const collectionRef = firestore.collection("collections");
      dispatch(fetchCollectionsStart());

      const unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      });
      dispatch(storeUnsubscribeFromSnapshot(unsubscribeFromSnapshot));
    } catch (err) {
      dispatch(fetchCollectionsFailure(err.message));
    }
  };
};
