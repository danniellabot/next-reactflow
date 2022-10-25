// unit test for the Container component
// check max width renders correctly

import React from "react";
import { render } from "@testing-library/react";
import Container from "./index";

describe("Container", () => {
  it("should render the component", () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
  });

  it("should render the component with max width", () => {
    const { container } = render(<Container maxWidth="md" />);
    expect(container).toMatchSnapshot();
  });
});
