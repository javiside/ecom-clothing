import { createSelector } from "reselect";
import get from "lodash/get";

const selectShop = state => state.shop;
const selectPreviewCollections = (state, props) => get(props, "items", []);
const selectCollectionIdFromUrl = (state, props) =>
  get(props, "match.params.collectionId", "");

/**
 * Selector to get the getIsCollectionFetching boolean value
 *
 * @returns {boolean} the fetching collection status.
 */
const getIsCollectionFetching = createSelector(
  [selectShop],
  shop => shop.isCollectionFetching
);

/**
 * Selector to get the collections from the shop store
 *
 * @returns {object} collections from the shop store.
 */
const selectCollections = createSelector([selectShop], shop =>
  get(shop, "collections", {})
);

/**
 * Selector to convert the collections to array format
 *
 * @returns {array} collections as array from the shop store.
 */
const selectCollectionsAsArray = createSelector([selectCollections], collections =>
  Object.keys(collections).map(key => collections[key])
);

/**
 * Selector to get the specific array from the collectionId
 *
 * @returns {array} single specific collection array (collections[collectionId]).
 */
const selectCollection = createSelector(
  [selectCollections, selectCollectionIdFromUrl],
  (collections, collectionId) => collections[collectionId]
);

/**
 * Selector to filter and get the first four elements on every collection array
 *
 * @returns {array} filtered collections array (selectPreviewCollections).
 */
const selectHeadItems = createSelector([selectPreviewCollections], collections =>
  collections.filter((item, idx) => idx < 4)
);

/**
 * Selector to get the props for the collection page component
 *
 * @returns {object} with collection (selectCollection).
 */
export const getCollectionPageProps = createSelector([selectCollection], collection => ({
  collection,
}));

/**
 * Selector to get the props for the collection-overview container component
 *
 * @returns {object} with isLoading (isCollectionFetching).
 */
export const getOverviewContainerProps = createSelector(
  [getIsCollectionFetching],
  isCollectionFetching => ({
    isLoading: isCollectionFetching,
  })
);

/**
 * Selector to get the props for the collection-overview component
 *
 * @returns {object} with collections (selectCollectionsAsArray).
 */
export const getCollectionsOverviewProps = createSelector(
  [selectCollectionsAsArray],
  collections => ({
    collections,
  })
);

/**
 * Selector to get the props for the collection-preview component
 *
 * @returns {object} with items (selectHeadItems).
 */
export const getCollectionsPreviewProps = createSelector([selectHeadItems], items => ({
  items,
}));

/**
 * Selector to get the props for the collection.container component
 *
 * @returns {object} with isLoading (!selectCollection).
 */
export const getCollectionContainerProps = createSelector(
  [selectCollection],
  collection => ({
    isLoading: !collection,
  })
);
