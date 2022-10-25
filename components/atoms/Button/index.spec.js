// unit test for Button component using react-test-renderer

import React from "react";
import renderer from "react-test-renderer";
import Button from "./index";

describe("Button", () => {
  const props = {
    onClick: jest.fn(),
    children: "Button",
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // fire event on button click
  it("fires event on button click", () => {
    const tree = renderer.create(<Button {...props} />).toJSON();
    tree.props.onClick();
    expect(props.onClick).toHaveBeenCalled();
  });
});
