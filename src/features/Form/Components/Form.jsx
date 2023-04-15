import React from "react";
import { FormContext } from "../context/FormContext";

export default function Form({ children }) {
  return <FormContext.Provider>{children}</FormContext.Provider>;
}