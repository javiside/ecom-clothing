import React from "react";
import { shallow } from "enzyme";

import Register from "../../components/register";

describe("Register", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<Register />)).toMatchSnapshot();
  });
});
