import { useFormContext } from "../context/FormContext";

import React from "react";

export default function useFormUtils() {
  const { formDetails, setFormDetails } = useFormContext();

  function changeFormTitle(title) {
    setFormDetails((details) => {
      return { ...details, title: title };
    });
  }
  function changeFormDescription(description) {
    setFormDetails((details) => {
      return { ...details, description: description };
    });
  }

  return {changeFormTitle,changeFormDescription}
}
