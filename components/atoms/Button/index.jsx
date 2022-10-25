// create button component from material ui button

import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  return (
    <MuiButton
      variant={props.variant ? props.variant : "contained"}
      color={props.color ? props.color : "primary"}
      size={props.size ? props.size : "large"}
      data-testid={props.dataTestId}
      onClick={props.onClick}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
