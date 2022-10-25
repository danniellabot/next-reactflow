// create a new atom component from TextField component in material ui

// Path: components/atoms/TextField/index.jsx
import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldComponent = ({ label, value, onChange }) => {
    // check if the text field is a password field
    // if it is add a button to toggle the visibility of the password
    // if it is not a password field, just return the text field
    const isPasswordField = label.toLowerCase().includes("password");
  return (
    <TextField
      fullWidth
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      type={isPasswordField ? "password" : "text"}
    />
  );
};

export default TextFieldComponent;
