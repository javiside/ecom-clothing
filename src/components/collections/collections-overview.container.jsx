import { connect } from "react-redux";

import WithSpinner from "../with-spinner";
import CollectionsOverview from "./collections-overview";

import { getOverviewContainerProps } from "../../redux/shop/shop.selectors";

const CollectionsOverviewContainer = connect(getOverviewContainerProps)(
  WithSpinner(CollectionsOverview)
);
export default CollectionsOverviewContainer;
