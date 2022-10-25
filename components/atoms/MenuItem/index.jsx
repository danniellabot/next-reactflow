// create a new atom component from MenuItem component in material ui

// Path: components/atoms/MenuItem/index.jsx
import React from "react";
import MenuItem from "@mui/material/MenuItem";

const MenuItemComponent = (props) => {
  const { value, onClick, label, className } = props;
  return (
    <MenuItem key={value} value={value} onClick={onClick} className={className}>
      {label || value}
    </MenuItem>
  );
};

export default MenuItemComponent;
