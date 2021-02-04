import React from "react";
import { Link } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  <Link to={linkUrl} className={`${size} menu-item`}>
    <img
      className="background-image"
      src={imageUrl}
      alt={title}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </Link>
);

export default MenuItem;
