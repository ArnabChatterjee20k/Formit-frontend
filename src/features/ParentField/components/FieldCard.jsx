import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Border } from "../../../components/ui/Border";

const RADIUS = 8;

export default function FieldCard({ title, description, children }) {
  return (
    <Paper
      sx={{
        padding: "2rem",
        position: "relative",
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
    >
      <Border
        sx={{ borderTopRightRadius: RADIUS, borderTopLeftRadius: RADIUS }}
      />
      <FieldCard.Header text={title} />
      <FieldCard.Description text={description} />
      {children}
    </Paper>
  );
}

FieldCard.Header = ({ text }) => {
  return (
    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "2rem" }}>
      {text}
    </Typography>
  );
};

FieldCard.Description = ({ text }) => {
  return (
    <Typography
      variant="subtitle2"
      sx={{ fontSize: "1rem", color: (theme) => theme.palette.grey[500] }}
    >
      {text}
    </Typography>
  );
};
