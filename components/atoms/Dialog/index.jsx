// Dialog component is a wrapper around material ui dialog component

import React from "react";
import { Dialog as MuiDialog, DialogTitle as MuiDialogTitle } from "@mui/material";


const Dialog = (props) => {
    return (
        <MuiDialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        {props.children}
        </MuiDialog>
    );
    }

export default Dialog;

