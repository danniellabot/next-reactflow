// create a new Menu component based on the Menu component from the Material UI library
// Menu has props for id, anchorEl, anchorOrigin, keepMounted, transformOrigin, open, onClose, sx, and children
// import the Menu component from the Material UI library

import React from "react";
import { Menu as MaterialMenu } from "@mui/material";

const Menu = (props) => {
    return (
        <MaterialMenu 
            anchorEl={props.anchorEl}
            anchorOrigin={props.anchorOrigin}
            keepMounted={props.keepMounted}
            transformOrigin={props.transformOrigin}
            open={props.open}
            onClose={props.onClose}
            sx={props.sx}
            variant={props.variant}
        >
            {children}
        </MaterialMenu>
    );
}

export default Menu;

