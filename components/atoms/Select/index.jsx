// create a new component from Select component in Material UI
//
// Path: components/atoms/Select/index.jsx

import React from "react";
import {
  Select as SelectComponent,
  InputLabel,
  FormControl,
} from "@mui/material";

const Select = (props) => {
  return (
      <SelectComponent
        data-testid="select-test"
        labelId={props.labelId}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        label={props.label}
        sx={props.sx}
        name={props.name}
      >
        {props.children}
      </SelectComponent>
  );
};

export default Select;
