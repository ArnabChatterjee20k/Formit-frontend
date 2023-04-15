export const createField = ({
  title,
  description,
  type,
  validators,
  options,
}) => {
  if (!title || !description)
    throw Error({
      cause: {
        fieldmissing: `${!title ? "title missing" : ""} , ${
          !description ? "description missing" : ""
        }`,
      },
    });
  return {
    title: title,
    description: description,
    metaData: {
      type: type || "", // heading , textfield , checkbox , select,
      validators: validators || [],
      options: options || [], // for select , checkbox
    },
  };
};
