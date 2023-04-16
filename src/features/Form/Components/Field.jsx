import Text from "../../Fields/Text/Text";
import { FieldContext } from "../Context/FieldContext";

/**
 *
 * @param {props} -> {metadata:{},attributes:{},handlers:{}}
 * @returns
 */
export const Field = ({ metaData, attributes, handlers }) => {
  const type = metaData.type;
  return (
    <FieldContext.Provider value={{ metaData, attributes, handlers }}>
      {type === "text" ? (
        // <Text id={id} title={title} description={description} />
        <Text />
      ) : null}
    </FieldContext.Provider>
  );
};
