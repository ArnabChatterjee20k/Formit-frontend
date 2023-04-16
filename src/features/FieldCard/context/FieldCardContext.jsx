import { createContext, useContext } from "react";

export const FieldCardContext = createContext(); 
export const useFieldCardContext = ()=>useContext(FieldCardContext);