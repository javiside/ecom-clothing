import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import { render } from "@testing-library/react";

import App from "../App";

describe("<App />", () => {
  const renderApp = () =>
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

  it("mounts the connected component correctly", () => {
    const { container } = renderApp();
    expect(container.querySelector(".homepage")).toBeInTheDocument();
  });
});
