import FieldCard from "../../FieldCard";
import TextField from "@mui/material/TextField";

export default function Text({ title, description, ...props }) {
  return (
    <FieldCard title={title} description={description} style={{gap:2}}>
      <FieldCard.Description text={description} heading={true} />
      <TextField
        variant="standard"
        fullWidth={true}
        placeholder="Your response"
      />
    </FieldCard>
  );
}
