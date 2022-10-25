import React, { useCallback } from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Menu from "./index";

describe("Menu", () => {
  const props = {
    onClose: jest.fn(),
    open: false,
  };
  it("renders correctly", () => {
    const tree = renderer.create(<Menu {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
