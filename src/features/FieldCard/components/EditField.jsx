import React from "react";
import TextField from "@mui/material/TextField";

export default function EditField({value,style}) {
  return (
    <TextField
      required
      defaultValue={value}
      variant="standard"
      InputProps={{ sx: {...style,margin:2} }}
    />
  );
}
