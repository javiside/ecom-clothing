import React from "react";
import { shallow } from "enzyme";

import LoginAndRegister from "../../pages/login-and-register";

describe("LoginAndRegister", () => {
  it("should mount the component correctly", () => {
    expect(shallow(<LoginAndRegister />)).toMatchSnapshot();
  });
});
