// by default header
// else accordingly import the raw mui components
import FormHeading from "../../Fields/FormHeading/FormHeading";
import Text from "../../Fields/Text/Text";

export const Field = ({metaData, ...props}) => {
  switch (metaData.type) {
    case "text":
      return <Text {...props} />;
    default:
      return null
  }
};
