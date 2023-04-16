import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export default function FormContextProvider({ children }) {
  const [selectedField, setSelectedField] = useState(null);
  const [formDetails, setFormDetails] = useState({
    title: "",
    description: "",
  });
  const [fieldStack, setFieldStack] = useState([
    // {
    //   title: "title",
    //   metaData: {
    //   type:  "text", // heading , textfield , checkbox , select,
    //   // validators: validators || [],
    //   // options: options || [], // for select , checkbox
    // },
    // }
  ]);

  return (
    <FormContext.Provider value={{ fieldStack,selectedField,setSelectedField,setFieldStack,formDetails,setFormDetails }}>
      {children}
    </FormContext.Provider>
  );
}
