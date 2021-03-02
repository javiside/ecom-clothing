import React from "react";
import { shallow } from "enzyme";

import FormInput from "../../components/form-input";

describe("FormInput", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<FormInput />)).toMatchSnapshot();
  });
});
