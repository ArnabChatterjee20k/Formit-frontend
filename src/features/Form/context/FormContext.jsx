const { createContext, useContext } = require("react");

export const FormContext = createContext();

export const useFormContext = useContext(FormContext);