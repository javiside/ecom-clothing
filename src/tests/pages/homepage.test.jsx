import React from "react";
import { shallow } from "enzyme";

import Homepage from "../../pages/homepage";

describe("Homepage", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<Homepage />)).toMatchSnapshot();
  });
});
