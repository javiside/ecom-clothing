import React, { useEffect } from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../components/collections/collections-overview.container";
import CollectionContainer from "./collection.container";

import {
  fetchCollections,
  callUnsubscribeFromSnapshot,
} from "../redux/shop/shop.actions";

import "../styles/pages/shop.scss";

const ShopPage = ({ fetchCollections, callUnsubscribeFromSnapshot }) => {
  useEffect(() => {
    fetchCollections();
    return () => {
      callUnsubscribeFromSnapshot();
    };
  }, [fetchCollections, callUnsubscribeFromSnapshot]);
  return (
    <div className="shop-page">
      <Route exact path="/shop" component={CollectionsOverviewContainer} />
      <Route path="/shop/:collectionId" component={CollectionContainer} />
    </div>
  );
};

export default connect(null, { fetchCollections, callUnsubscribeFromSnapshot })(ShopPage);
