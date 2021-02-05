import React from "react";

import DIRECTORY_DATA from "../tempMocks/directory.data.js";

import MenuItem from "./menu-item";

import "../styles/directory.scss";

class Directory extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      sections: DIRECTORY_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
