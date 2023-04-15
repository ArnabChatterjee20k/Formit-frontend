import * as Yup from "yup";

// const formStructure = {
//   title: "",
//   description: "",
//   metaData: {
//     type: "", // heading , textfield , checkbox , select,
//     validators: [],
//     options: [], // for select , checkbox
//   },
// };


export const formStructureSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
  metaData: Yup.object().shape({
    type: Yup.string().oneOf(["heading", "text" , "checkbox" , "select"]).required(),
    validators: Yup.array().of(Yup.string()),
    options: Yup.array().of(Yup.string()),
  }),
});