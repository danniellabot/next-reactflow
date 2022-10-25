// unit test for NavigationBar component using react-testing-library and @testing-library/jest-dom matchers

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavigationBar from "./index";

// renders correctly
// onClick Menu button fires event on button click

describe("NavigationBar", () => {
  const props = {
    onClick: jest.fn(),
    children: "Button",
  };

  it("renders correctly", () => {
    const { container } = render(<NavigationBar />);
    expect(container).toMatchSnapshot();
  });

  screen.debug();

});
