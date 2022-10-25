// unit test for Select component

// test Select component renders correctly
// test onChange event is handled using fireEvent

// props object

import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import Select from "./index";
import MenuItem from '../MenuItem'

describe("Select", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Select />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should be able to mount the component', () => {
    const { container } = render(
      <Select value={10}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>,
    );

    expect(container.querySelector('input')).toHaveProperty('value', '10');
  });
});
