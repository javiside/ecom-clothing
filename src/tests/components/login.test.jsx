import React from "react";
import { shallow } from "enzyme";

import Login from "../../components/login";

describe("Login", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<Login />)).toMatchSnapshot();
  });
});
