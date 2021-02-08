import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../components/collections/collections-overview.container";
import CollectionContainer from "./collection.container";

import { fetchCollectionsStartAsync } from "../redux/shop/shop.actions";

import "../styles/pages/shop.scss";

class ShopPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    return (
      <div className="shop-page">
        <Route exact path="/shop" component={CollectionsOverviewContainer} />
        <Route path="/shop/:collectionId" component={CollectionContainer} />
      </div>
    );
  }
}

export default connect(null, { fetchCollectionsStartAsync })(ShopPage);
