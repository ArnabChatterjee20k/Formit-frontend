import React from "react";
import { useFormContext } from "../../Form";
import FieldCard from "../../FieldCard";
import Stack from "@mui/material/Stack";

const RADIUS = 8;
export default function FormHeading({ title, description }) {
  return (
    <>
      <FieldCard
        title="Unititled Form"
        description="Lorem Ipsum"
        style={{ borderTopRightRadius: RADIUS, borderTopLeftRadius: RADIUS }}
      >
        <FieldCard.Border
          style={{ borderTopRightRadius: RADIUS, borderTopLeftRadius: RADIUS }}
        />
        <Stack flexDirection="row" justifyContent="space-between">
          <FieldCard.Header text={title || "Untitled Form"} />
          <FieldCard.Menu />
        </Stack>
        <FieldCard.Description text={description || "Set Form Description"} />
      </FieldCard>
    </>
  );
}
