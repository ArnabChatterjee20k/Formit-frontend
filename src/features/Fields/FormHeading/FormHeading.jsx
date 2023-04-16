import React from "react";
import FieldCard from "../../FieldCard";
import useFormUtils from "../../../hooks/useFormUtils";
import { useFormContext } from "../../Form";

const RADIUS = 8;
export default function FormHeading() {
  const {changeFormTitle,changeFormDescription} = useFormUtils()
  const {formDetails} = useFormContext()
  const {title,description} = formDetails
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
        <FieldCard.Header text={title || "Untitled Form"} onTextChange={changeFormTitle}/>
        <FieldCard.Description text={description || "Set Form Description"} onTextChange={changeFormDescription}/>
      </FieldCard>
    </>
  );
}
