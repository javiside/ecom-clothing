import React from "react";
import { shallow } from "enzyme";

import CustomButton from "../../components/custom-button";

describe("CustomButton", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<CustomButton />)).toMatchSnapshot();
  });
});
