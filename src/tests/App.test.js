import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import mockStore from "./mockStore";

import App from "../App";

describe("<App />", () => {
  let store = mockStore();

  const ConnectedApp = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  it("mounts the connected component correctly", () => {
    expect(mount(ConnectedApp).find(".homepage")).toHaveLength(1);
  });

  it("shallows the connected component correctly", () => {
    expect(shallow(ConnectedApp)).toMatchSnapshot();
  });
});
