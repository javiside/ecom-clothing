import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionsOverview from "../components/collections/collections-overview";
import CollectionPage from "../pages/collection";
import WithSpinner from "../components/with-spinner";

import { fetchCollectionsStartAsync } from "../redux/shop/shop.actions";
import { getShopPageProps } from "../redux/shop/shop.selectors";

import "../styles/pages/shop.scss";

const OverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path="/shop"
          render={props => (
            <OverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path="/shop/:collectionId"
          render={props => (
            <CollectionWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(getShopPageProps, { fetchCollectionsStartAsync })(ShopPage);
