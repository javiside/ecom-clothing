import { connect } from "react-redux";

import WithSpinner from "../components/with-spinner";
import CollectionPage from "./collection";

import { getCollectionContainerProps } from "../redux/shop/shop.selectors";

const CollectionContainer = connect(getCollectionContainerProps)(
  WithSpinner(CollectionPage)
);
export default CollectionContainer;
