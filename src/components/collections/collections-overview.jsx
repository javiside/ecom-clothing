import React from "react";
import { connect } from "react-redux";

import CollectionPreview from "./collection-preview";

import { getCollectionsOverviewProps } from "../../redux/shop/shop.selectors";

import "../../styles/collections/collections-overview..scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
export default connect(getCollectionsOverviewProps)(CollectionsOverview);
