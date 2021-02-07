import React from "react";
import { connect } from "react-redux";

import CollectionItem from "./collection-item";

import { getCollectionsPreviewProps } from "../../redux/shop/shop.selectors";

import "../../styles/collections/collection-preview.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default connect(getCollectionsPreviewProps)(CollectionPreview);
