import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Border, ActiveBorder } from "../../../components/ui/Border";

import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import EditField from "./EditField";

const RADIUS = 8;

export default function FieldCard({ title, description,edit, children }) {
  //   handle the editing using the context
  return (
    <Paper
      sx={{
        padding: "2rem",
        position: "relative",
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
    >
      {edit && <FieldCard.ActiveIndicator />}
      {children}
    </Paper>
  );
}

// Dependencies
FieldCard.Header = ({ text, edit }) => {
  const style = { fontWeight: "bold", fontSize: "2rem" };
  if (edit) return <EditField value={text} style={style} />;
  return (
    <Typography variant="h6" sx={style}>
      {text}
    </Typography>
  );
};

FieldCard.Description = ({ text, edit }) => {
  const style = { fontSize: "1rem", color: (theme) => theme.palette.grey[500] };
  if (edit) return <EditField value={text} style={style} />;
  return (
    <Typography variant="subtitle2" sx={style}>
      {text}
    </Typography>
  );
};

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
        top: "10px",
        height: "calc(100% - 10px)",
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      }}
    />
  );
};

FieldCard.Border = () => (
  <Border sx={{ borderTopRightRadius: RADIUS, borderTopLeftRadius: RADIUS }} />
);
