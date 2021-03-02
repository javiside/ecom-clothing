import React from "react";
import { shallow } from "enzyme";

import Contact from "../../pages/contact";

describe("Contact", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<Contact />)).toMatchSnapshot();
  });
});
