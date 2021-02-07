import React from "react";
import { connect } from "react-redux";

import { getDirectoryProps } from "../redux/directory/directory.selectors";

import MenuItem from "./menu-item";

import "../styles/directory.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default connect(getDirectoryProps)(Directory);
