import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

export const Border = styled(Paper)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: theme.palette.success.light,
  height: "20px",
  width: "100%",
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));
