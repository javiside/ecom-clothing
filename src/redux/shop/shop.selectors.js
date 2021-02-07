import { createSelector } from "reselect";
import get from "lodash/get";

const selectShop = (state) => state.shop;
const selectPreviewCollections = (state, props) => get(props, "items", []);
const selectCollectionIdFromUrl = (state, props) =>
  get(props, "match.params.collectionId", 1);

const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

const selectCollectionsAsArray = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

const selectCollection = createSelector(
  [selectCollections, selectCollectionIdFromUrl],
  (collections, collectionId) => collections[collectionId]
);

const selectHeadItems = createSelector(
  [selectPreviewCollections],
  (collections) => collections.filter((item, idx) => idx < 4)
);

export const getCollectionPageProps = createSelector(
  [selectCollection],
  (collection) => ({
    collection,
  })
);

export const getCollectionsOverviewProps = createSelector(
  [selectCollectionsAsArray],
  (collections) => ({
    collections,
  })
);

export const getCollectionsPreviewProps = createSelector(
  [selectHeadItems],
  (items) => ({
    items,
  })
);
