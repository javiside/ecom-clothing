import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import CollectionItem from "./collection-item";

import { getCollectionsPreviewProps } from "../../redux/shop/shop.selectors";

import "../../styles/collections/collection-preview.scss";

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link to={routeName}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>
    <div className="preview">
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default connect(getCollectionsPreviewProps)(CollectionPreview);
