import { useFormContext } from "../context/FormContext";

import React from "react";

export default function useFormUtils() {
  const { formDetails, setFormDetails , setFieldStack } = useFormContext();

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

  function addField(){
    const proto =  {
      title: "title",
      metaData: {
      type:  "text", // heading , textfield , checkbox , select,
      // validators: validators || [],
      // options: options || [], // for select , checkbox
      }
    }

    setFieldStack(fields=>{
      return [...fields,proto]
    })
  }
  return {changeFormTitle,changeFormDescription,addField}
}
