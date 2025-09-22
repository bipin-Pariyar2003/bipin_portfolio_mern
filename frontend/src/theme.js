// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: "dark",
    background: {
      default: "linear-gradient(135deg, #000000, #434343)", // black-gray gradient
      paper: "rgba(0,0,0,0.8)", // for cards, modals
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    primary: {
      main: "#00bcd4", // cyan accent
    },
    secondary: {
      main: "#ff4081", // pink accent
    },
  },
});

export default theme;
