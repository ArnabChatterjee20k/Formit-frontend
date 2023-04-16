import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Border, ActiveBorder } from "../../../components/ui/Border";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useFormContext } from "../../Form";

import { FieldCardContext, useFieldCardContext } from "../context/FieldCardContext";
import EditField from "./EditField";

export default function FieldCard({ children, id, style }) {
  //   handle the editing using the context
  const { selectedField, setSelectedField } = useFormContext();
  const edit = id === selectedField;

  return (
    <FieldCardContext.Provider value={{id}}>
      <Paper
        onClick={() => setSelectedField(id)}
        sx={{
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          border: (theme) => `1px solid ${theme.palette.grey[400]}`,
          padding: "2rem",
          position: "relative",
          backgroundColor: (theme) => theme.palette.grey[50],
          ...style,
        }}
      >
        {edit && <FieldCard.ActiveIndicator />}
        {children}
      </Paper>
    </FieldCardContext.Provider>
  );
}

// Dependencies
FieldCard.Header = ({ text,onTextChange }) => {
  const { selectedField, setSelectedField } = useFormContext();
  const {id} = useFieldCardContext()

  const edit = id === selectedField;
  const style = { fontWeight: "bold", fontSize: "2rem" };
  if (edit) return <EditField value={text} style={style} onTextChange={onTextChange}/>;
  return (
    <Typography variant="h6" sx={style}>
      {text}
    </Typography>
  );
};

FieldCard.Description = ({ text, heading ,onTextChange}) => {
  const { selectedField, setSelectedField } = useFormContext();
  const {id} = useFieldCardContext()

  const edit = id === selectedField;
  const style = {
    fontSize: "1rem",
    color: (theme) => (heading ? "black" : theme.palette.grey[500]),
  };
  if (edit)
    return <EditField value={text} style={{ ...style, color: "black" }} onTextChange={onTextChange}/>;

  return (
    <Typography variant="subtitle2" sx={style}>
      {text}
    </Typography>
  );
};

FieldCard.Border = ({ style }) => <Border sx={{ ...style }} />;

FieldCard.Menu = () => {
  return (
    <IconButton
      aria-label="more"
      id="long-button"
      aria-controls={open ? "long-menu" : undefined}
      aria-expanded={open ? "true" : undefined}
      aria-haspopup="true"
      //   onClick={menuAction}
    >
      <MoreVertIcon />
    </IconButton>
  );
};

FieldCard.ActiveIndicator = () => {
  return (
    <ActiveBorder
      sx={{
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    />
  );
};