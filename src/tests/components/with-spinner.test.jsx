import React from "react";
import { shallow } from "enzyme";

import WithSpinner from "../../components/with-spinner";

describe("WithSpinner", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<WithSpinner />)).toMatchSnapshot();
  });
});
