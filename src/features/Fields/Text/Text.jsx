import FieldCard from "../../FieldCard";
import TextField from "@mui/material/TextField";
import { useFieldContext } from "../../Form/Context/FieldContext";

export default function Text() {
  const {attributes,metaData,handlers} = useFieldContext()
  const {title,description,id} = attributes;
  return (
    <FieldCard title={title} description={description} style={{gap:2}} id={id}>
      <FieldCard.Description id={id} text={title} heading={true} />
      <TextField
        variant="standard"
        fullWidth={true}
        placeholder="Your response"
      />
    </FieldCard>
  );
}