import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Border = styled(Paper)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: theme.palette.success.light,
  height: "10px",
  width: "100%",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export const ActiveBorder = styled(Border)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "5px",
  height: "100%",
}));
