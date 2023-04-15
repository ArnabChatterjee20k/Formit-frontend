import React, { useState } from "react";

import FormHeading from "../../Fields/FormHeading/FormHeading";
import Stack from "@mui/material/Stack";
import { createField } from "../utils/createField";
import { useFormContext } from "../../../context/FormContext";
import FieldCard from "../../FieldCard";
import { Field } from "./Field";

/**
 * A Wrapper Providing the Context and The form heading
 */
export default function Form() {
  const { fieldStack, setFieldStack, formDetails, setFormDetails } =
    useFormContext();
  console.log(fieldStack)
  const title = fieldStack.title;
  const description = fieldStack.description;

  return (
    <Stack gap={4}>
      <FormHeading title={title} description={description} />
      {fieldStack?.map(({ title, description, metaData }) => {
        return <Field metaData={metaData} title={title} description={description}/>
      })}
    </Stack>
  );
}
