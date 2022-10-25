// create a new component from Container component in material ui
//
// Path: components/atoms/Container/index.jsx

import React from "react";
import Container from "@mui/material/Container";

const ContainerComponent = (props) => {
  const { children, className, maxWidth, disableGutters, fixed } = props;
  return (
    <Container
      className={className}
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      fixed={fixed}
    >
      {children}
    </Container>
  );
};

export default ContainerComponent;
