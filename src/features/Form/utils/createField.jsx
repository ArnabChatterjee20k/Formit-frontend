export const createField = ({
  title,
  type,
  validators,
  options,
}) => {
  return {
    title: title || "Field Title",
    metaData: {
      type: type || "text", // heading , text , checkbox , select,
      validators: validators || [],
      options: options || [], // for select , checkbox
    },
  };
};
