import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button";
import { addItem } from "../../redux/cart/cart.actions";

import "../../styles/collections/collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} alt={name} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
