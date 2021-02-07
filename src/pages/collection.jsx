import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../components/collections/collection-item";

import { getCollectionPageProps } from "../redux/shop/shop.selectors";

import "../styles/pages/collection.scss";

const CollectionPage = ({ collection: { title, items } }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default connect(getCollectionPageProps)(CollectionPage);
