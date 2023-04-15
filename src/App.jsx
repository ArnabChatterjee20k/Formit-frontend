import React from "react";
import FieldCard from "./features/ParentField";
import Box from "@mui/material/Box";

export default function App() {
  return (
    <Box width="60%" margin="auto" gap={4} display={"flex"} flexDirection={"column"}>
      <FieldCard title="Unititled Form" description="Lorem Ipsum" />
      <FieldCard title="Unititled Form" description="Lorem Ipsum" />
      <FieldCard title="Unititled Form" description="Lorem Ipsum" />
    </Box>
  );
}
