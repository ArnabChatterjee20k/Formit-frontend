import { createContext, useContext } from "react";

export const FieldContext = createContext();
export const useFieldContext = ()=>useContext(FieldContext)