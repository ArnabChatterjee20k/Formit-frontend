import React from "react";
import Paper from "@mui/material/Paper";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import useFormUtils from "../../../hooks/useFormUtils";

export default function EditMenu() {
    const {addField} = useFormUtils()
  return (
    <Paper sx={{ backgroundColor: (theme) => theme.palette.grey[300] }}>
      <MenuList>
        <MenuItem onClick={addField}><AddCircleOutlineIcon /></MenuItem>
        <MenuItem><CancelIcon/></MenuItem>
      </MenuList>
    </Paper>
  );
}